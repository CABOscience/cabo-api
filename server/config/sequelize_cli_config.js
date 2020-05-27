const fs = require('fs');

module.exports = {
  development: {
    username: 'coleo',
    database: 'coleo',
    //password: process.env.PG_PASS || null,
    host: process.env.PG_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      useUTC: false // -->Add this line. for reading from database
    },
    timezone: '-05:00'
  },
  staging: {
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
};