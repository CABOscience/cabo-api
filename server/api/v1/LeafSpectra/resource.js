'use strict'
//import { Op } from 'sequelize'
const { Op } = require("sequelize");

export default function (epilogue, db, resources) {
  const leafSpectraResource = epilogue.resource({
    model: db.LeafSpectra,
    endpoints: ['leaf_spectra/', 'leaf_spectra/:fulcrum_id'],
  })

  const leafSpectraReflectanceResource = epilogue.resource({
    model: db.LeafSpectra,
    endpoints: ['leaf_spectra/reflectance', 'leaf_spectra/reflectance/:fulcrum_id'],
    search: [
      {operator: Op.iLike, param: 'fulcrum_id', attributes: ['fulcrum_id']},
      {operator: Op.substring, param: 'scientific_name', attributes: ['scientific_name']},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: [{
      model: db.LeafSpectraData,
      where: {
        reflectance_transmittance: "reflectance"
      },
      attributes: ['wavelength','r_t_average'],
    }],
    raw: true,
  },{
  })

  const leafSpectraTransmittanceResource = epilogue.resource({
    model: db.LeafSpectra,
    endpoints: ['leaf_spectra/transmittance', 'leaf_spectra/transmittance/:fulcrum_id'],
    search: [
      {operator: Op.eq, param: 'fulcrum_id', attributes: ['fulcrum_id']},
      {operator: Op.substring, param: 'scientific_name', attributes: ['scientific_name']},
      {operator: Op.eq, param: 'created_at', attributes: ['created_at']},
    ],
    include: [{
      model: db.LeafSpectraData,
      where: {
        reflectance_transmittance: "transmittance"
      },
      attributes: ['wavelength','r_t_average']
    }],
    raw: true,
  },{
  })

  resources.leafSpectraResource = leafSpectraResource
  resources.leafSpectraReflectanceResource = leafSpectraReflectanceResource
  resources.leafSpectraTransmittanceResource = leafSpectraTransmittanceResource
}
