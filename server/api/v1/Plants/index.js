'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const Plants = db.define('plants', {
    fulcrum_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    plant_id: {
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
    plot_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Plot unique id',
    },
    project: {
      type: DataTypes.STRING,
      comment: 'Project identifier',
    },
    geometry: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true,
      comment: 'Site location'
    },
    date_first_observed: {
      type: DataTypes.STRING,
    },
    first_observed_by: {
      type: DataTypes.STRING,
    },
    scientific_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Scientific name'
    },
    taxon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Taxon ID'
    },
    plant_photos: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Plant photos UUID'
    },
    plant_photos_caption: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Plant photos caption'
    },
    close_up_photos: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Plant close-up photos UUID'
    },
    close_up_photos_caption: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Plant photos caption'
    },
    taxon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Site location'
    },
    permission:{
      type: DataTypes.VIRTUAL
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
    hooks: {
        afterFind: (l, options) => {
          console.log(l);
          l.permission = l.projects_permissions.permission  
          for (var i = 0; i < l.length; i++) {
            console.log(l[i]);
            if(l[i].projects_permission !== null){
              l[i].permission = l[i].projects_permissions.permission  
            }else{
              l[i].permission=2
            }
          }
          return l
        }
      }
  })

  // Instance Methods
  // Sites.prototype.your_method
  //Sites.removeAttribute('id');
  db.Plants = Plants
}
