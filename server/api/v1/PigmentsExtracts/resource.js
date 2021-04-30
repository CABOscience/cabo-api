'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const PigmentsExtractsResource = epilogue.resource({
    model: db.PigmentsExtracts,
    endpoints: ['pigments_extracts/', 'pigments_extracts/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
      {operator: Op.eq, param: 'sample', attributes: ['$leaf_disk.sample$']},
    ],
    include: [{
      model:db.Pigments
    },
	{
      model:db.LeafDisks,
      include:[{
      	model:db.Cryoboxes
      },
	  {
      	model:db.LeafAreaAndWaterSamples, 
      }
      ]
    }
    ]
  })
  resources.PigmentsExtractsResource = PigmentsExtractsResource
}
