'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const leafSpectraDataResource = epilogue.resource({
    model: db.LeafSpectraData,
    endpoints: ['leaf_spectra_data/', 'leaf_spectra_data/:record_id'],
    search: [
      {operator: Op.eq, param: 'record_id', attributes: [ 'record_id' ]},
    ],
    include: [],
    raw: true,
  })


  resources.leafSpectraDataResource = leafSpectraDataResource
}
