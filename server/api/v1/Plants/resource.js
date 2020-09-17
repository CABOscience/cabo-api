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
    ],
    include: [
      {
        model: db.BulkLeafSamples
      },
      {
        model: db.Sites
      },
    ]
  })

  resources.plantsResource = plantsResource
}
