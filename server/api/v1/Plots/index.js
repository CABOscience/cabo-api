'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const Plots = db.define('plots', {
    fulcrum_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    plot_id: {
      type: DataTypes.STRING,
      unique: 'uq_plant_id',
      allowNull: false,
      comment: 'Plant unique id',
    },
    site_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Site unique id',
    },
    plot_field_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Plot field id',
    },
    geometry: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true,
      comment: 'Site location'
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
  db.Plots = Plots
}
