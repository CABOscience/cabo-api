'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const CarbonFractions = db.define('carbon_fractions', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    date_started: {
      type: DataTypes.DATE,
      allowNull: true,
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

  db.CarbonFractions = CarbonFractions
}
