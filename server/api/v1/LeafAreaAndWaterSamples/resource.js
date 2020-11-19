'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const LeafAreaAndWaterSamplesResource = epilogue.resource({
    model: db.LeafAreaAndWaterSamples,
    endpoints: ['Leaf_spectra_and_water_samples/', 'Leaf_spectra_and_water_samples/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'sample_id', attributes: [ 'sample_id' ]},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: []
  })

  resources.LeafAreaAndWaterSamplesResource = LeafAreaAndWaterSamplesResource
}
