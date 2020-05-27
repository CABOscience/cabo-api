/*
    Define your globals server side here

    We use the __...__ naming schem
*/

import path from 'path'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
console.log(process.env.PG_PASS)
global.__ENV__ = process.env.NODE_ENV

global.__DEV__ = __ENV__ === 'development'
global.__TEST__ = __ENV__ === 'test' // Not really use
global.__PROD__ = __ENV__ === 'production'
global.__STAG__ = __ENV__ === 'staging'

// Paths
global.__ROOT_DIR__ = path.join(__dirname, '..', '..', '..')

global.__SERVER_DIR__ = path.join(__ROOT_DIR__, 'server')
global.__CONFIG_DIR__ = path.join(__SERVER_DIR__, 'config')
global.__ENV_DIR__ = path.join(__SERVER_DIR__, 'environment')

global.__NODE_MODULES_DIR__ = path.join(__ROOT_DIR__, 'node_modules')
