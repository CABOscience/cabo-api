'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const CarbonFractionsBags = db.define('carbon_fractions_bags', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    fulcrum_parent_id:{
      type: DataTypes.UUID,
    },
    leaf_chemistry_sample: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Leaf Chemistry Sample identifier'
    },
    soluble_perc:{
      type: DataTypes.TEXT
    },
    hemicellulose_perc:{
      type: DataTypes.TEXT
    },
    cellulose_perc:{
      type: DataTypes.TEXT
    },
    lignin_perc:{
      type: DataTypes.TEXT
    },
    soluble_perc:{
      type: DataTypes.TEXT
    },
    quality_flag_bag:{
      type: DataTypes.TEXT
    }
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

  db.CarbonFractionsBags = CarbonFractionsBags
}
