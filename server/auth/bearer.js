'use strict'

import { Strategy as BearerStrategy } from 'passport-http-bearer'

export default function (db, passport) {
  // ApiKey
  passport.use('apiKey', new BearerStrategy((key, done) => {
    db.ApiKeys.findOne({ where: {token: key} }).then(function (apiKey) {
        if (!apiKey) {
          return done(null, null)
        } else {
          return apiKey.getUser()
            .then((user) => {
              return done(null, user.dataValues)
            })
            .catch(done)
        }
      })
  }))
};
