'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const carbonFractions = epilogue.resource({
    model: db.CarbonFractions,
    endpoints: ['carbon_fractions/', 'carbon_fractions/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'date_started', attributes: ['date_started']},
    ],
    include: []
  })

  resources.carbonFractions = carbonFractions
}
