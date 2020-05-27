'use strict'
import { Router } from 'express'

import setupPassport from './passport'

// TODO use uuid

export default function (app, db) {
  // Passport Configuration
  const passport = setupPassport(app, db)

  const router = Router()
  app.use('/auth', router)

  // Via login form
  router.post('/login', passport.authenticate('local', {
    successRedirect: '/'
  }))

  // Via ApiKey/Token
  router.post('/apikey', passport.authenticate('apiKey'), (req, res) => {
    res.json({
      ...req.session.passport.user,
      isAuthByKey: true
    }).end()
  })

  // Handle logout
  router.get('/logout', (req, res) => {
    req.logOut()
    res.end()
  })

  // Signup
  // TODO
  // router.post("/signup", (req, res) => {
  //     db.users.findOne({
  //         email: req.body.email
  //     })
  //     .then((user) => {
  //         if (user) {
  //             res.status(400).send({
  //                 error: "L'utilisateur " + user.email + " existe déjà. Veuillez vous rendre à la page de connexion."
  //             });
  //         } else {
  //             db.users.create({
  //                 name: req.body.name,
  //                 lastname: req.body.lastname,
  //                 organization: req.body.organization,
  //                 email: req.body.email,
  //                 password: req.body.password
  //             })
  //             .then((user) => {
  //                 res.status(201)
  //                 .send({
  //                     message: "L'utilisateur " + user.email + " vient d'être créé"
  //                 }),
  //                 function errorCallBack(error) {
  //                     res.status(500).send({
  //                         message: "L'utilisateur n'a pas pu être créé"
  //                     })
  //                 }
  //             })
  //         }
  //     })
  // });
}
