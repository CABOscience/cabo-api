'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const sitesResource = epilogue.resource({
    model: db.Sites,
    endpoints: ['sites/', 'sites/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'site_id', attributes: [ 'site_id' ]},
      {operator: Op.like, param: 'verbatim_site', attributes: ['verbatim_site']},
      {operator: Op.eq, param: 'created_at', attributes: ['opened_at']}
    ],
    include: []
  })

  resources.sitesResource = sitesResource
}
