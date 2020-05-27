'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const bulkLeafSamplesResource = epilogue.resource({
    model: db.BulkLeafSamples,
    endpoints: ['bulk_leaf_samples/', 'bulk_leaf_samples/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'fulcrum_id', attributes: [ 'fulcrum_id' ]},
      {operator: Op.ilike, param: 'scientific_name', attributes: ['scientific_name']},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']}
    ],
    include: []
  })

  resources.bulkLeafSamplesResource = bulkLeafSamplesResource
}
