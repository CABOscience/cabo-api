'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const LeafSpectra = db.define('leaf_spectra', {
    fulcrum_id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    site_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Site unique id',
    },
    geometry: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true,
      comment: 'Site location'
    },
    scientific_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Scientific name of plant'
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

  db.LeafSpectra = LeafSpectra
}
