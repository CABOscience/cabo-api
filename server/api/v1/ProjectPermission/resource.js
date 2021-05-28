'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const ProjectPermissionResource = epilogue.resource({
    model: db.ProjectPermission,
    endpoints: ['project_permission/', 'project_permission/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
  })
  resources.ProjectPermissionResource = ProjectPermissionResource
}
