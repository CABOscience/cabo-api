'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const cnLeafConcentrations = epilogue.resource({
    model: db.CNLeafConcentrations,
    endpoints: ['c_n_leaf_concentrations/', 'c_n_leaf_concentrations/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'leaf_chemistry_sample', attributes: [ 'leaf_chemistry_sample' ]},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: []
  })

  resources.cnLeafConcentrations = cnLeafConcentrations
}
