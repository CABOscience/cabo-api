'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const LeafChemistrySamples = db.define('leaf_chemistry_samples', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    site_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Site unique id',
    },
    sample: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Sample identifier'
    },
    sample_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Sample identifier'
    },
    status: {
      type: DataTypes.STRING,
      comment: 'Status (submitted, pending, ...)'
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

  db.LeafChemistrySamples = LeafChemistrySamples
}
