'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const PigmentsResource = epilogue.resource({
    model: db.Pigments,
    endpoints: ['pigments/', 'pigments/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: [{
      model:db.Pigments
    }]
  })
  resources.PigmentsResource = PigmentsResource
}
