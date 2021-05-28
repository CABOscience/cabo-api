'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const ProjectsPermissionsResource = epilogue.resource({
    model: db.ProjectsPermissions,
    endpoints: ['projects_permissions/', 'projects_permissions/:project'],
    search: [
    ],
  })
  resources.ProjectsPermissionsResource = ProjectsPermissionsResource
}
