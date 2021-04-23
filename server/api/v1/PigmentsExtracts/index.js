'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const PigmentsExtracts = db.define('pigments_extracts', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    fulcrum_parent_id: {
      type: DataTypes.UUID,
    },
    project: {
      type: DataTypes.TEXT,
    },
    leaf_disk_sample: {
      type: DataTypes.TEXT,
    },
    leaf_disk_mass_g: {
      type. DataTypes.FLOAT,
    },
    chla_mg_g_disk_mass: {
      type: DataTypes.TEXT,
    },
    chlb_mg_g_disk_mass: {
      type: DataTypes.TEXT,
    },
    carot_mg_g_disk_mass: {
      type: DataTypes.TEXT,
    },
    chl_a_chl_b_ratio: {
      type: DataTypes.TEXT,
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

  db.PigmentsExtracts = PigmentsExtracts
}
