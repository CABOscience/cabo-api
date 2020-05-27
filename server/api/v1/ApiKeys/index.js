'use strict'

import { DataTypes } from 'sequelize'

export default function (db) {
  const ApiKeys = db.define('api_keys', {
    token: {
      type: DataTypes.STRING,
      comment: 'token used by a user',
      unique: 'uq_api_key',
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true
  })

  // TODO generate new key
  db.ApiKeys = ApiKeys
}
