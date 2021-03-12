'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const ICPLeafElementConcentrations = db.define('icp_leaf_element_concentrations', {
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
    al_mg_g : {
      type: DataTypes.FLOAT,
    },
    b_mg_g : {
      type: DataTypes.FLOAT,
    },
    ca_mg_g : {
      type: DataTypes.FLOAT,
    },
    cu_mg_g : {
      type: DataTypes.FLOAT,
    },
    fe_mg_g : {
      type: DataTypes.FLOAT,
    },
    k_mg_g : {
      type: DataTypes.FLOAT,
    },
    mg_mg_g : {
      type: DataTypes.FLOAT,
    },
    mn_mg_g : {
      type: DataTypes.FLOAT,
    },
    mo_mg_g : {
      type: DataTypes.FLOAT,
    },
    na_mg_g : {
      type: DataTypes.FLOAT,
    },
    ni_mg_g : {
      type: DataTypes.FLOAT,
    },
    p_mg_g : {
      type: DataTypes.FLOAT,
    },
    s_mg_g : {
      type: DataTypes.FLOAT,
    },
    zn_mg_g : {
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

  db.ICPLeafElementConcentrations = ICPLeafElementConcentrations
}
