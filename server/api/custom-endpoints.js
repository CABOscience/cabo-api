'use strict'
import { Op } from 'sequelize'

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
    attributes : ['fulcrum_id','scientific_name', 'sample_id', 'geometry'],
    }).then(ids => {
      res.send(ids)
    })
  }),
  app.get('/api/v1/plants_samples/', function (req, res) {
    db.Plants.findAll({
    include: [
      {
        model: db.BulkLeafSamples,
        where: {
          sample_id: req.query.sample_id
        }
      },
    ]
    }).then(result => {
      res.send(result)
    })
  }),
  //MEAN SPECTRA BY TAXA
  app.post('/api/v1/leaf_spectra_mean/search/', function (req, res) {
    if(typeof req.body.taxa !== 'undefined'){
      db.query("SELECT wavelength, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name iLike '%"+req.body.taxa+"%' AND reflectance_transmittance='"+req.body.type+"' GROUP BY wavelength ORDER BY wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }else if(typeof req.body.ids !== 'undefined'){
      db.query("SELECT wavelength, reflectance_transmittance, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE record_id IN("+req.body.ids+") GROUP BY wavelength, reflectance_transmittance ORDER BY wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }else if(typeof req.body.species !== 'undefined'){
      db.query("SELECT scientific_name, reflectance_transmittance, wavelength, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name IN('"+req.body.species+"') GROUP BY scientific_name, wavelength ORDER BY scientific_name, reflectance_transmittance, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }
  })
}


