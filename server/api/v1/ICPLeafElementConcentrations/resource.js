'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const icpLeafElementConcentrationsResource = epilogue.resource({
    model: db.ICPLeafElementConcentrations,
    endpoints: ['icp_leaf_element_concentrations/', 'icp_leaf_element_concentrations/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'leaf_chemistry_sample', attributes: [ 'leaf_chemistry_sample' ]},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: []
  })

  resources.icpLeafElementConcentrationsResource = icpLeafElementConcentrationsResource
}
