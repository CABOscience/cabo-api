'use strict'

import passport from 'passport'

import setupLocalStrategy from './local'
import setupBearerStrategy from './bearer'

export default function (app, db) {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function (user, done) {
    // What we want to store in the session
    done(null, {
      id: user.id,
      role: user.role
    })
  })

  passport.deserializeUser(function (u, done) {
    db.Users.findByPk(u.id)
      .then((user) => {
        done(null, {
          id: user.dataValues.id,
          role: user.dataValues.role
        })

        return null // remove sequelize warning about promise
      })
      .catch(done)
  })

  setupLocalStrategy(db, passport)
  setupBearerStrategy(db, passport)

  return passport
};
