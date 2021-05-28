'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const ProjectPermission = db.define('project_permission', {
    project: {
      type: DataTypes.TEXT,
    },
    permission:{
      type: DataTypes.INTEGER,
    },
  }, {
    underscored: true,
    freezeTableName: true,
    validate: {},
    timestamps: false,
  })

  db.ProjectPermission = ProjectPermission
}
