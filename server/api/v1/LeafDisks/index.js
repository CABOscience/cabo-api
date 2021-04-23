'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const LeafDisks = db.define('leaf_disks', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    sample: {
      type: DataTypes.TEXT,
    },
    sample_id: {
      type: DataTypes.TEXT,
    },
    box: {
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

  db.LeafDisks = LeafDisks
}
