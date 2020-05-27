'use strict'
// use uuid

import { DataTypes } from 'sequelize'

export default function (db) {
  const LeafSpectraTransmittances = db.define('spectra_processed', {
		id: {
	      type: DataTypes.UUID,
	      primaryKey: true
	    },
	    record_id: {
	      type: DataTypes.UUID,
	    },
	    reflectance_transmittance: {
	      type: DataTypes.STRING,
	    },
	    wavelength: {
	      type: DataTypes.REAL,
	      comment: 'Wavelength',
	    },
	    r_t_average: {
	      type: DataTypes.DOUBLE,
	      comment: 'Average reflectance or transmittance',
	    },
    },
     {
    underscored: true,
    freezeTableName: true,
    validate: {},
    timestamps: false,
  })
//LeafSpectraProcessed.removeAttribute('id');
  db.LeafSpectraTransmittances = LeafSpectraTransmittances
}
