'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const LeafAreaAndWaterSamples = db.define('leaf_area_and_water_samples', {
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
    sample2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Sample identifier'
    },
    sample_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Sample identifier'
    },
    leaf_mass_per_area_g_m2 : {
      type: DataTypes.TEXT,
      comment: 'Leaf Mass per Area (g/m2)'
    },
    leaf_dry_matter_content_mg_g : {
      type: DataTypes.TEXT,
      comment: 'Leaf Dry Matter Content (mg/g)'
    },
    leaf_relative_water_content_perc : {
      type: DataTypes.TEXT,
      comment: 'Leaf Relative Water Content (%)'
    },
    equivalent_water_thickness_cm : {
      type: DataTypes.TEXT,
      comment: 'Equivalent Water Thickness (cm)'
    },
    actual_leaf_dry_matter_content_perc: {
      type: DataTypes.TEXT,
      comment: 'Actual Leaf Dry Matter Content (%)'
    },
    leaf_fresh_mass_g : {
      type: DataTypes.TEXT,
      comment: 'Leaf Fresh Mass (g)'      
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
    hooks: {
      afterFind: (l, options) => {
        for (var i = 0; i < l.length; i++) {
          if(typeof l[i].leaf_disks[0].cryobox !== 'undefined' && l[i].leaf_disks[0].cryobox.preservation_method=='frozen') {
            l[i].leaf_disks[0].pigments_extract.chla_mg_g_disk_mass=l[i].leaf_disks[0].pigments_extract.chla_mg_g_disk_mass/(l[i].leaf_relative_water_content_perc/100)
            l[i].leaf_disks[0].pigments_extract.chlb_mg_g_disk_mass=l[i].leaf_disks[0].pigments_extract.chlb_mg_g_disk_mass/(l[i].leaf_relative_water_content_perc/100)
            l[i].leaf_disks[0].pigments_extract.carot_mg_g_disk_mass=l[i].leaf_disks[0].pigments_extract.carot_mg_g_disk_mass/(l[i].leaf_relative_water_content_perc/100)
          }
          l[i].leaf_disks[0].pigments_extract.chla_mg_cm2=1000
          l[i].leaf_disks[0].pigments_extract.chlb_mg_cm2=1000
          l[i].leaf_disks[0].pigments_extract.carot_mg_g_cm2=1000
        }
        return l
      },
    },

  })

  db.LeafAreaAndWaterSamples = LeafAreaAndWaterSamples
}
