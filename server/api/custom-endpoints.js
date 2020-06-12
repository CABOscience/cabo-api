'use strict'
import { Op, QueryTypes } from 'sequelize'

export default function (app, db) {
  //SEARCH SPECTRA BY TAXA
  app.get('/api/v1/leaf_spectra/search/taxa', function (req, res) {
    db.LeafSpectra.findAll({
    where:{
      scientific_name : {
        [Op.iLike]: '%'+req.query.taxa+'%'
      },
      status: "submitted"
    },
    attributes : ['fulcrum_id','scientific_name'],
    }).then(ids => {
      res.send(ids)
    })
  }),
  //MEAN SPECTRA BY TAXA
  app.get('/api/v1/leaf_spectra_mean/search/taxa', function (req, res) {
    const results = await sequelize.query("SELECT wavelength, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name iLike '%"+req.query.taxa+"%' AND reflectance_transmittance='"+req.query.taxa+"' GROUP BY wavelength;", { type: sequelize.QueryTypes.SELECT }); 
    res.send(results)
  }
}


