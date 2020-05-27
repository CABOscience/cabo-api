'use strict'

import Sequelize from 'sequelize'
import { setupModels } from '../api'

export default function (config) {
  const db = new Sequelize(config.database, config.username, config.password, config)

  // Register models
  setupModels(db)

  return Promise.resolve(db)
}
