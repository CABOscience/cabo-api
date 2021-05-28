'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const ProjectsPermissions = db.define('projects_permissions', {
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

  db.ProjectsPermissions = ProjectsPermissions
}
