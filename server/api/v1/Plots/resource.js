'use strict'
import { Op } from 'sequelize'

export default function (epilogue, db, resources) {
  const plotsResource = epilogue.resource({
    model: db.Plots,
    endpoints: ['plots/', 'plots/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'plot_id', attributes: [ 'plot_id' ]},
      {operator: Op.ilike, param: 'plot_field_id', attributes: ['plot_field_id']},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: []
  })

  resources.plotsResource = plotsResource
}
