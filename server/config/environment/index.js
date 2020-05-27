'use strict'

/*
    Default config of this server

    You can define config base on the NODE_ENV variable
        development.js
        staging.js
        production.js

*/
var all = {
  // Server port
  port: process.env.PORT || 3001,

  // Serveur adresse
  ip: process.env.IP || '0.0.0.0',

  // Secret for session, you will want to change this and make it an environment variable
  // TODO better security
  sessionsSecret: process.env.SESSION_SECRET || '1234', // MUST BE SHARE BETWEEN INSTANCES

  redisStore: {
    host: process.env.REDIS_HOST || '0.0.0.0',
    port: process.env.REDIS_PORT || 6379
  },
}

// Extend and export the config base on NODE_ENV
module.exports = {
  ...all,

  // require the right config
  ...require(`./${process.env.NODE_ENV}.js`) || {}
}
