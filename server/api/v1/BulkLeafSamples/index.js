'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const BulkLeafSamples = db.define('bulk_leaf_samples', {
    fulcrum_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    sample_id: {
        type: DataTypes.TEXT,
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
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Scientific name of plant'
    },
    plant: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: 'Plant Fulcrum identifier UUID'
    },
    plant2: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: 'Plant Fulcrum identifier UUID 2'
    },
    plant_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Plant unique id',
    },
    plant_tag_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Plant tag ID'
    },
    date_sampled:{
      type: DataTypes.DATE
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

  // Instance Methods
  // Sites.prototype.your_method
  //Sites.removeAttribute('id');
  db.BulkLeafSamples = BulkLeafSamples
}
