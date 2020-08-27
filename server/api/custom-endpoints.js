'use strict'
import { Op } from 'sequelize'
import https from 'https'
import he from 'he'
import _ from 'lodash'

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
    }else if(typeof req.query.species !== 'undefined'){
      db.query("SELECT scientific_name, reflectance_transmittance, wavelength, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name IN('"+req.query.species+"') GROUP BY scientific_name, wavelength, reflectance_transmittance ORDER BY scientific_name, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }
  })

  app.get('/api/v1/leaf_spectra_mean/search/', function (req, res) {
    if(typeof req.query.species !== 'undefined'){
      db.query("SELECT scientific_name, reflectance_transmittance, wavelength, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name =  '"+req.query.species+"' GROUP BY scientific_name, wavelength, reflectance_transmittance ORDER BY scientific_name, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }
  })

  app.get('/api/v1/vascan/', function (req, res) {
    if(typeof req.query.q !== 'undefined'){
      https.get('https://data.canadensys.net/vascan/api/0.1/search.json?q='+_.deburr(he.decode(req.query.q)), (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          res.send(data)
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    }
  })

  app.get('/api/v1/vascan/autocomplete', function (req, res) {
    if(typeof req.query.q !== 'undefined'){
      https.get('https://data.canadensys.net/vascan/api/0.1/search.json?q='+_.deburr(he.decode(req.query.q)), (resp) => {
        let dat = '';
        resp.on('data', (chunk) => {
          dat += chunk;
        });
        resp.on('end', () => {
          let data=JSON.parse(dat)
          if(data.results[0].numMatches!==0){
            let sci = [] //sci names in Vascan that match
            data.results.matches.map(r => {
              sci.push("'"+r.scientific_name+"'");
            })
            db.query("SELECT scientific_name FROM scientific_names_in_spectra WHERE scientific_name = IN("+sci.join(',')+")", { type: db.QueryTypes.SELECT }).then(result => {
              if(result.data.length!==0){
                let sci_res = [] //sci names in DB that match
                result.data.map (rm => {
                    sci_res.push(rm.data.scientific_name)
                })
                let output = []
                data.results.matches.map(r => {
                  if(sci_res.includes(r.scientificName)){
                    r.vernacularNames.forEach( v => {
                      if(v.vernacularName.indexOf(req.query.q)!==-1){
                        output.push(v.vernacularName)
                      }
                    })
                    if(r.scientificName.indexOf(req.query.q)!==-1){
                      output.push(r.scientificName)
                    }
                  }
                })
                res.send(output)
              }else{
                res.send([]);
              }
            })
          }else{
            data.results[0].matches
          }
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    }
  })


}


