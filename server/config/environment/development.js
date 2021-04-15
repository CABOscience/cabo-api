'use strict'

// Development specific configuration
// ==================================
module.exports = {
  // config access database
  sequelize: {
    username: 'cabo',
    database: 'cabo',
    password: process.env.PG_PASS || null,
    //host: process.env.PG_HOST || 'localhost',
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      useUTC: false // -->Add this line. for reading from database
    },
    timezone: '-05:00'
  },

  mockDb: false

}
