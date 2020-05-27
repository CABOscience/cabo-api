'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const Sites = db.define('sites', {
    fulcrum_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    site_id: {
      type: DataTypes.STRING,
      unique: 'uq_site_id',
      allowNull: false,
      comment: 'Site unique id',
    },
    geometry: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true,
      comment: 'Site location'
    },
    site_latitude: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Site location'
    },
    site_longitude: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Site location'
    },
    verbatim_site: {
      type: DataTypes.TEXT
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
  db.Sites = Sites
}
