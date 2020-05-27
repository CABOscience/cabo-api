'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const leafSpectraTransmittancesResource = epilogue.resource({
    model: db.LeafSpectraTransmittances,
    endpoints: ['leaf_spectra_transmittance/', 'leaf_spectra_transmittance/:record_id'],
    search: [
      {operator: Op.eq, param: 'record_id', attributes: [ 'record_id' ]},
    ],
    include: [],
  })
/*
  campaignsResource.list.fetch.before(function(req, res, context){
      
      return context.continue
  })
*/
  resources.leafSpectraTransmittancesResource = leafSpectraTransmittancesResource
}
