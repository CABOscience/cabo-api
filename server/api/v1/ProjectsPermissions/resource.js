'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const ProjectsPermissionsResource = epilogue.resource({
    model: db.ProjectsPermissions,
    endpoints: ['projects_permissions/', 'projects_permissions/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
  })
  resources.ProjectsPermissionsResource = ProjectsPermissionsResource
}
