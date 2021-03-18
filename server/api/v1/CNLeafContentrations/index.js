'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const CNLeafConcentrations = db.define('c_n_leaf_concentrations', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    sample_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Sample identifier'
    },
    leaf_chemistry_sample: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Leaf Chemistry Sample identifier'
    },
    c_perc : {
      type: DataTypes.FLOAT,
    },
    n_perc : {
      type: DataTypes.FLOAT,
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

  db.CNLeafConcentrations = CNLeafConcentrations
}
