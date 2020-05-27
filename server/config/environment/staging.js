'use strict'

// Development specific configuration
// ==================================
module.exports = {

  mockDb: false,

  // config access database
  sequelize: {
    username: 'coleo',
    database: 'coleo',
    password: process.env.PG_PASS,
    host: 'postgres01.vhost33',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      useUTC: false // -->Add this line. for reading from database
    },
    timezone: '-05:00'
  },

  ip: '0.0.0.0',
  port: 3001,

  sessionsSecret: process.env.SESSION_SECRET,

  redisStore: {
    host: 'postgres01.vhost33',
    port: 6379
  }

}
