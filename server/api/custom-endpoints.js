'use strict'
import { Op } from 'sequelize'
import https from 'https'
import he from 'he'
import _ from 'lodash'
import { Parser } from 'json2csv'

export default function (app, db) {
  //SEARCH SPECTRA BY TAXA
  app.post('/api/v1/leaf_spectra/search/taxa', function (req, res) {
      let select = 'SELECT sample_id, b.scientific_name FROM plants p, bulk_leaf_samples b';
      let where = ' WHERE (p.fulcrum_id=b.plant OR p.fulcrum_id=b.plant2)'
      if(req.body.taxa !== ''){
        where +=" AND p.scientific_name like '%"+ req.body.taxa + "%'";
      }
      if(req.body.start_date !== ''){
        where +=" AND b.date_sampled >= '"+ req.body.start_date + "' AND b.date_sampled <= '"+req.body.end_date+"'";
      }
      if(req.body.projects !== '') {
        where +=' AND p.project IN('+req.body.projects+')'  
      }
      if(req.body.geometry !== '') {
        select += ", ST_GeomFromGeoJSON('"+req.body.geometry+"') g";
        where +=' AND ST_Within(p.geometry,g.geometry)'
      }
      db.query(select + where, { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
  }),
  app.get('/api/v1/plants_samples/', function (req, res) {
    db.Plants.findAll({
    include: [
      {
        model: db.BulkLeafSamples,
        where: {
          sample_id: req.query.sample_id
        },
      },
      {
        model: db.Sites,
        as: 'sites'
      },
    ]
    }).then(result => {
      res.send(result)
    })
  }),

  app.get('/api/v1/projects', function (req, res) {
      db.query("SELECT DISTINCT project FROM sites WHERE project !='CABO-test' ORDER BY project;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
  }),

  //MEAN SPECTRA BY TAXA
  app.post('/api/v1/leaf_spectra_mean/search/', function (req, res) {
    if(typeof req.body.taxa !== 'undefined'){
      db.query("SELECT wavelength, avg(r_t_average) as val, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name iLike '%"+req.body.taxa+"%' AND reflectance_transmittance='"+req.body.type+"' GROUP BY wavelength ORDER BY wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }else if(typeof req.body.ids !== 'undefined'){
      db.query("SELECT wavelength, reflectance_transmittance as r_t, avg(r_t_average) as val, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE sample_id IN("+req.body.ids+") GROUP BY wavelength, reflectance_transmittance ORDER BY wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }else if(typeof req.query.species !== 'undefined'){
      db.query("SELECT scientific_name, reflectance_transmittance as r_t, wavelength, avg(r_t_average) as val, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name IN('"+req.query.species+"') GROUP BY scientific_name, wavelength, reflectance_transmittance ORDER BY scientific_name, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }
  })

  //MEAN SPECTRA BY TAXA
  app.post('/api/v1/leaf_spectra_raw/', function (req, res) {
    if(typeof req.body.ids !== 'undefined'){
      db.query("SELECT leaf_number, wavelength, reflectance_transmittance as r_t, calculated_value as val FROM spectra_leaves WHERE sample_id IN("+req.body.ids+") ORDER BY leaf_number, wavelength, reflectance_transmittance;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }else{
      res.send("");
    }
  })


  app.get('/api/v1/leaf_spectra_mean/search/', function (req, res) {
    if(typeof req.query.species !== 'undefined'){
      db.query("SELECT scientific_name, reflectance_transmittance as r_t, wavelength, avg(r_t_average) as val, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name =  '"+req.query.species+"' GROUP BY scientific_name, wavelength, reflectance_transmittance ORDER BY scientific_name, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        res.send(result);
      })
    }
  })

  app.get('/api/v1/traits/all/', function (req, res) {
    if(typeof req.query.trait !== 'undefined') {
      if(req.query.table=="carbon_fractions_bags"){
        var check="quality_flag_bag='good'"
      }else{
        var check="status='submitted'"
      }
      if(req.query.table=="pigments_extracts"){
        if(req.query.trait=="chl_a_chl_b_ratio"){
          db.query("SELECT string_agg(substring("+req.query.trait+",0,8),',') as "+req.query.trait+" FROM leaf_area_and_water_samples l INNER JOIN leaf_disks d ON l.sample=d.sample INNER JOIN pigments_extracts e ON e.leaf_disk_sample=d.fulcrum_id INNER JOIN pigments p ON p.fulcrum_id=e.fulcrum_parent_id INNER JOIN cryoboxes c ON d.box=c.fulcrum_id WHERE p.status='submitted' AND e."+req.query.trait+" IS NOT NULL AND preservation_method='frozen';" { type: db.QueryTypes.SELECT }).then(result => {
            res.send(result);
          });
        }else{
          db.query("SELECT string_agg(substring(("+req.query.trait+"::float/(actual_leaf_dry_matter_content_perc::float/100))::text,0,8),',') as "+req.query.trait+" FROM leaf_area_and_water_samples l INNER JOIN leaf_disks d ON l.sample=d.sample INNER JOIN pigments_extracts e ON e.leaf_disk_sample=d.fulcrum_id INNER JOIN pigments p ON p.fulcrum_id=e.fulcrum_parent_id INNER JOIN cryoboxes c ON d.box=c.fulcrum_id WHERE p.status='submitted' AND e."+req.query.trait+" IS NOT NULL AND preservation_method='frozen';" { type: db.QueryTypes.SELECT }).then(result => {
            res.send(result);
          });
        }
      }else{
        db.query("SELECT data_type FROM information_schema.columns where table_name = '"+req.query.table+"' AND column_name='"+req.query.trait+"'", { type: db.QueryTypes.SELECT }).then(type => {
          let q=''
          if(type[0].data_type=='text'){
            q += "SELECT string_agg(substring("+req.query.trait+" from 0 for 8),',') as "+req.query.trait+" FROM "+req.query.table+" WHERE "+check+" AND "+req.query.trait+" IS NOT NULL";
          }else{
            q += "SELECT string_agg(substring("+req.query.trait+"::text from 0 for 8),',') as "+req.query.trait+" FROM "+req.query.table+" WHERE "+check+" AND "+req.query.trait+" IS NOT NULL";
          }
          db.query(q, { type: db.QueryTypes.SELECT }).then(result => {
            res.send(result);
          })
        });
      }
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
      let query = _.deburr(he.decode(req.query.q)).toLowerCase()
      https.get('https://data.canadensys.net/vascan/api/0.1/search.json?q='+query, (resp) => {
        let dat = '';
        resp.on('data', (chunk) => {
          dat += chunk;
        });
        resp.on('end', () => {
          let data=JSON.parse(dat)
          if(data.results[0].numMatches===0 | (data.results[0].numMatches==1 && typeof data.results[0].matches != 'undefined' && data.results[0].matches[0].taxonRank=='genus')){
            db.query("SELECT scientific_name FROM scientific_names_in_spectra WHERE scientific_name ILIKE '%"+req.query.q.toLowerCase()+"%'", { type: db.QueryTypes.SELECT }).then(result => {
              if(result.length!==0){
                let output = []
                result.map(rm => {
                  output.push({name:rm.scientific_name,sci_name:rm.scientific_name})
                })
                res.send(output)
              }else{
                res.send([])
              }
            })

          }else{
            let sci = [] //sci names in Vascan that match
            data.results[0].matches.map(r => {
              sci.push("'"+r.scientificName+"'")
            })
            db.query("SELECT scientific_name FROM scientific_names_in_spectra WHERE scientific_name IN("+sci.join(',')+")", { type: db.QueryTypes.SELECT }).then(result => {
              if(result.length !== 0){
                let sci_res = [] //sci names in DB that match
                result.map (rm => {
                    sci_res.push(rm.scientific_name)
                })
                let output = []
                data.results[0].matches.map(r => {
                  if(sci_res.includes(r.scientificName)){
                    r.vernacularNames.forEach( v => {
                      if(_.deburr(v.vernacularName).indexOf(query)!==-1){
                        output.push({name:v.vernacularName, sci_name:r.scientificName})
                      }
                    })
                    if(r.scientificName.toLowerCase().indexOf(req.query.q.toLowerCase())!==-1){
                      output.push({name:r.scientificName, sci_name:r.scientificName})
                    }
                  }
                })
                res.send(output)
              }else{

              }
            })
          }
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    }
  })

  //SPECTRA DOWNLOAD
  app.post('/api/v1/leaf_spectra/csv/', function (req, res) {
    if(typeof req.body.ids !== 'undefined' && req.body.type=='mean'){
      db.query("SELECT wavelength, reflectance_transmittance, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE record_id IN("+req.body.ids+") GROUP BY wavelength, reflectance_transmittance ORDER BY wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        try {
          const parser = new Parser();
          const csv = parser.parse(result);
          res.status(200).send(csv);
        } catch (err) {
          console.error(err);
        }
      })
    } else if(typeof req.body.ids !== 'undefined' && req.body.type=='raw'){
      //db.query("SELECT sample_id, scientific_name, date_measured, leaf_side_measured, wavelength, reflectance_transmittance, r_t_average from spectra_processed WHERE sample_id IN("+req.body.ids+") ORDER BY sample_id, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
      db.query("SELECT s.sample_id, l.site_id, l.scientific_name, s.leaf_number, l.date_measured, s.leaf_side_measured, wavelength, reflectance_transmittance, calculated_value FROM spectra_leaves s LEFT JOIN leaf_spectra l ON(s.sample_id2=l.sample_id) WHERE l.sample_id IN("+req.body.ids+") ORDER BY sample_id, leaf_number, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        try {
          const parser = new Parser();
          const csv = parser.parse(result);
          res.status(200).send(csv);
        } catch (err) {
          console.error(err);
        }
      })
    } else if(typeof req.body.taxa !== 'undefined' && req.body.type=='mean'){
      const sci=[]
      req.body.taxa.map(r => {
        sci.push("'"+r+"'")
      })
      db.query("SELECT scientific_name, wavelength, reflectance_transmittance, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name IN("+sci+") GROUP BY scientific_name, wavelength, reflectance_transmittance ORDER BY scientific_name, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        try {
          const parser = new Parser();
          const csv = parser.parse(result);
          res.status(200).send(csv);
        } catch (err) {
          console.error(err);
        }
      })
    } else if(typeof req.body.taxa !== 'undefined' && req.body.type=='raw'){
      db.query("SELECT sample_id, scientific_name, wavelength, reflectance_transmittance, avg(r_t_average) as avg, min(r_t_average) as min, max(r_t_average) as max from spectra_processed WHERE scientific_name IN("+req.body.taxa+") ORDER BY sample_id, scientific_name, wavelength;", { type: db.QueryTypes.SELECT }).then(result => {
        try {
          const parser = new Parser();
          const csv = parser.parse(result);
          res.status(200).send(csv);
        } catch (err) {
          console.error(err);
        }
      })
    } else {
      res.send([]);
    }
  })
}


