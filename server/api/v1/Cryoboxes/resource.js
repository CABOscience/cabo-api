'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const CryoboxesResource = epilogue.resource({
    model: db.Cryoboxes,
    endpoints: ['cryoboxes/', 'cryoboxes/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: []
  })
  resources.CryoboxesResource = CryoboxesResource
}
