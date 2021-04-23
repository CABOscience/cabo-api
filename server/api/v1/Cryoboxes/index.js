'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const Cryoboxes = db.define('cryoboxes', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    sample: {
      type: DataTypes.text,
    },
    sample_id: {
      type: DataTypes.text,
    },
    box: {
      type: DataTypes.text,
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

  db.Cryoboxes = Cryoboxes
}
