'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const LeafChemistrySamplesResource = epilogue.resource({
    model: db.LeafChemistrySamples,
    endpoints: ['leaf_chemistry_samples/', 'leaf_chemistry_samples/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'sample_id', attributes: [ 'sample_id' ]},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: [
      {
        model: db.ICPLeafElementConcentrations
      },
      {
        model: db.CNLeafConcentrations
      }, 
      {
        model: db.CarbonFractionsBags,
        include: [
        {
          model: db.CarbonFractions,
        }
        ]
      }, 
    ]
  })

  resources.LeafChemistrySamplesResource = LeafChemistrySamplesResource
}
