'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const leafSpectraReflectancesResource = epilogue.resource({
    model: db.LeafSpectraReflectances,
    endpoints: ['leaf_spectra_reflectance/', 'leaf_spectra_reflectance/:record_id'],
    search: [
      {operator: Op.eq, param: 'record_id', attributes: [ 'record_id' ]},
    ],
    include: [],
    raw: true,
  })

  leafSpectraReflectancesResource.list.fetch.after(function(req, res, context){
      return context.continue
  })
  resources.leafSpectraReflectancesResource = leafSpectraReflectancesResource
}
