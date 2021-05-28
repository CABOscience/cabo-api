'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const plantsResource = epilogue.resource({
    model: db.Plants,
    endpoints: ['plants/', 'plants/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'plant_id', attributes: [ 'plant_id' ]},
      {operator: Op.ilike, param: 'scientific_name', attributes: ['scientific_name']},
      {operator: Op.eq, param: 'created_at', attributes: ['opened_at']}
      {operator: Op.eq, param: 'permission', attributes: ['$project_permission.permission$']}
    ],
    include: [
      {
        model: db.BulkLeafSamples
      },
      {
        model: db.Sites
      },
      {
        model: db.ProjectPermission
      },
    ]
  })
  var ForbiddenError = require('finale-rest').Errors.ForbiddenError;
  plantsResource.read.fetch.before(function(req, res, context){
    if(req.user.role!='admin'){
      req.query.permission=1;
      return context.continue
    }
  })
  plantsResource.delete.fetch.before(function(req, res, context){
      context.error(new ForbiddenError());
  })
  plantsResource.create.write.before(function(req, res, context){
      context.error(new ForbiddenError());
  })
  resources.plantsResource = plantsResource
}
