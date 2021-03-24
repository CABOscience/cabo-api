'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const carbonFractionsBags = epilogue.resource({
    model: db.CarbonFractionsBags,
    endpoints: ['carbon_fractions_bags', 'carbon_fractions_bags/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'fulcrum_parent_id', attributes: ['fulcrum_parent_id']},
      {operator: Op.eq, param: 'date_started', attributes: ['date_started']},
    ],
    include: [
      {
        model: db.CarbonFractions
      }, 
    ]
  })

  resources.carbonFractionsBags = carbonFractionsBags
}
