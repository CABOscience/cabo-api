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
    leaf_disk_sample: {
      type: DataTypes.TEXT,
    },
    leaf_disk_mass_g: {
      type: DataTypes.FLOAT,
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
    chla_mg_cm2: {
      type: DataTypes.VIRTUAL,
    },
    chlb_mg_cm2: {
      type: DataTypes.VIRTUAL,
    },
    carot_mg_cm2: {
      type: DataTypes.VIRTUAL,
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
    hooks: {
      afterFind: (l, options) => {
        for (var i = 0; i < l.length; i++) {
          if(typeof l[i].leaf_disk.cryobox !== 'undefined' && l[i].leaf_disk.cryobox.preservation_method=='frozen') {
            l[i].chla_mg_g_disk_mass=l[i].chla_mg_g_disk_mass/(l[i].leaf_disk.leaf_area_and_water_sample.leaf_relative_water_content_perc/100)
            l[i].chlb_mg_g_disk_mass=l[i].chlb_mg_g_disk_mass/(l[i].leaf_disk.leaf_area_and_water_sample.leaf_relative_water_content_perc/100)
            l[i].carot_mg_g_disk_mass=l[i].carot_mg_g_disk_mass/(l[i].leaf_disk.leaf_area_and_water_sample.leaf_relative_water_content_perc/100)
          }
          /*l[i].leaf_disks[0].pigments_extract.chla_mg_cm2=1000
          l[i].leaf_disks[0].pigments_extract.chlb_mg_cm2=2000
          l[i].leaf_disks[0].pigments_extract.carot_mg_cm2=3000*/
        }
        return l
      },
    },
  })

  db.PigmentsExtracts = PigmentsExtracts
}
