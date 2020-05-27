'use strict'

import { Strategy as LocalStrategy } from 'passport-local'

// TODO use uuid

export default function (db, passport) {
  // Username & Password
  passport.use('local', new LocalStrategy({
    // By default, local strategy uses username, we use email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: true
  },
  (req, email, password, done) => {
    db.Users.findOne({
      where: {
        email: {
          $eq: email
        }
      }
    })
      .then(function (user) {
        if (!user) {
          done(null, null, {
            message: 'Courriel et mot de passe invalide'
          })
        } else if (user.authenticate(password)) {
          done(null, user.dataValues)
        } else {
          done(null, null, {
            message: 'Courriel et mot de passe invalide'
          })
        }
      })
  }))
};
