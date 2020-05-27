'use strict'

// Development specific configuration
// ==================================
module.exports = {

  mockDb: false,

  // config access database
  sequelize: {
    username: 'cabo',
    database: 'cabo',
    password: process.env.PG_PASS,
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      useUTC: false // -->Add this line. for reading from database
    },
    timezone: '-05:00'
  },

  ip: '0.0.0.0',
  port: 3001,

  sessionsSecret: process.env.SESSIONSECRET,

  redisStore: {
    host: 'localhost',
    port: 6379
  }

}
