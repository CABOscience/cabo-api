'use strict'

/*
    Express config
*/

import express from 'express'
import expressSession from 'express-session'
import connectRedis from 'connect-redis'
import redis from 'redis'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import epilogue from 'finale-rest' // finale-rest is a fork of epilogue with Sequelize 4 support
import errorHandler from 'errorhandler'
import coleoReqUser from 'coleo-req-user'
import coleoAuthorizeUser from 'coleo-authorize-user'
import customEndpoints from '../api/custom-endpoints'

import setupAuthentication from '../auth'
import { setupResources } from '../api'

export default function (db, config) {
  const app = express()

  if (__DEV__ || __STAG__) {
    // Logger
    app.use(morgan('dev'))
  }

  var whitelist = ['http://localhost:8080', 'http://localhost:3001', 'http://0.0.0.0:3001', 'http://0.0.0.0:8080']
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(null, true)//callback(new Error('Not allowed by CORS'))
      }
    },
  }
  app.use(cors(corsOptions))

  // BodyParser
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json({limit: '30MB'}))

  // Setup sessions
  let redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
  })

  redisClient.unref()
  redisClient.on('error', console.log)
  let RedisStore = require('connect-redis')(expressSession)
  
  app.set('trust proxy', 1)
  app.use(expressSession({
    secret: config.sessionsSecret,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      secure: false,
      // secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: new RedisStore({ client: redisClient })
  }))

  // Auth setup
  setupAuthentication(app, db)

  // Populate req.user from session
  app.use(coleoReqUser())

  if (__DEV__ || __STAG__) {
    // Return the current user
    app.get('/api/v1*', (req, res, next) => {
      next()
    })
  }
  // Authorization
  app.use(coleoAuthorizeUser(['user']))

  // Return the current user
  app.get('/api/v1/users/me', (req, res, next) => {
    if (req.user.role === 'unauth') {
      res.status(401).end()
    } else {
      // eslint-disable-next-line no-new
      Promise.all([
        db.Users.findOne({
          raw: true,
          where: {
            id: req.user.id
          },
          attributes: {
            exclude: ['password']
          }
        }),
        db.ApiKeys.findOne({
          raw: true,
          where: {
            user_id: req.user.id
          }
        })
      ]).then((results) => {
        let User = results[0]
        let ApiKey = results[1]
        let UserProfile = res.json({
          ...User,
          token: ApiKey.token
        })
        return UserProfile
      })
    }
  })

  // RESTapi via Epilogue
  epilogue.initialize({
    app,
    sequelize: db,
    base: '/api/v1/'
  })
  setupResources(epilogue, db)

  customEndpoints(app,db)

  // Error handler - must be last
  if (__DEV__ || __STAG__) {
    app.use(errorHandler())
  }

  return app
}
