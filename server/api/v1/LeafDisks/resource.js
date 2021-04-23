'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const LeafDisksResource = epilogue.resource({
    model: db.Pigments,
    endpoints: ['leaf_disks/', 'leaf_disks/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
	include: [{
		model:db.PigmentsExtracts,
		include: [{
	  		model:db.Pigments
		}]
	}]
  })
  resources.LeafDisksResource = LeafDisksResource
}
