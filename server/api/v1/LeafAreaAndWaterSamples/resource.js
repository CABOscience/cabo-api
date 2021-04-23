'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const LeafAreaAndWaterSamplesResource = epilogue.resource({
    model: db.LeafAreaAndWaterSamples,
    endpoints: ['leaf_area_and_water_samples/', 'leaf_area_and_water_samples/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'sample_id', attributes: [ 'sample_id' ]},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: [{
      model: db.LeafDisks,
      include: [{
        model:db.PigmentsExtracts,
        include: [{
          model:db.Pigments
        }]
      },
      {
        model: db.Cryoboxes,
      }
      ]
    }],
  })

  resources.LeafAreaAndWaterSamplesResource = LeafAreaAndWaterSamplesResource
}
