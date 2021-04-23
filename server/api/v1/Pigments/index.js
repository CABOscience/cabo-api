'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const Pigments = db.define('pigments', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    project: {
      type: DataTypes.text,
      comment: 'Site unique id',
    },
    created_at:{
      type: DataTypes.DATE
    },
    updated_at:{
      type: DataTypes.DATE
    }
  }, {
    underscored: true,
    freezeTableName: true,
    validate: {},
    timestamps: false,
  })

  db.Pigments = Pigments
}
