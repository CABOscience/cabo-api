'use strict'
export default function (db) {
  // ApiKeys
  db.ApiKeys.belongsTo(db.Users, {
    onDelete: 'CASCADE'
  })

  db.Sites.hasMany(db.Plots,{foreignKey: 'site_id'})
  db.Plots.hasMany(db.Plants,{foreignKey: 'plot_id'})
  db.Sites.hasMany(db.Plants,{as:'plants',foreignKey: 'site', sourceKey:'fulcrum_id'})
  db.Plants.belongsTo(db.Sites,{as:'sites',foreignKey: 'site', sourceKey:'fulcrum_id'})
  db.BulkLeafSamples.hasMany(db.LeafSpectra,{foreignKey: 'sample_id', sourceKey:'sample_id'})
  db.BulkLeafSamples.hasMany(db.LeafAreaAndWaterSamples,{foreignKey: 'sample_id', sourceKey:'sample_id'})
  db.LeafChemistrySamples.hasMany(db.ICPLeafElementConcentrations,{foreignKey: 'leaf_chemistry_sample', sourceKey:'fulcrum_id'})
  db.LeafChemistrySamples.hasMany(db.CNLeafConcentrations,{foreignKey: 'leaf_chemistry_sample', sourceKey:'fulcrum_id'})
  db.LeafChemistrySamples.hasMany(db.CarbonFractionsBags,{foreignKey: 'leaf_chemistry_sample', sourceKey:'fulcrum_id'})
  db.CarbonFractionsBags.hasOne(db.CarbonFractions,{foreignKey: 'fulcrum_id', sourceKey:'fulcrum_parent_id'})
  db.PigmentsExtracts.hasMany(db.Pigments,{foreignKey:'fulcrum_id', sourceKey: 'fulcrum_parent_id' })
  db.LeafAreaAndWaterSamples.hasMany(db.LeafDisks,{foreignKey: 'sample_id', sourceKey:'sample_id'})
  db.LeafDisks.hasOne(db.PigmentsExtracts, {foreignKey: 'leaf_disk_sample', sourceKey: 'fulcrum_id'})
  db.LeafDisks.hasOne(db.Cryoboxes, {foreignKey: 'cryobox_id', sourceKey: 'box'})

  //db.LeafSpectra.hasMany(db.LeafSpectraTransmittances, {as: 'transmittances', foreignKey: 'record_id'})
  //db.LeafSpectraData.belongsTo(db.LeafSpectra,{constraints: false})
  //db.LeafSpectraProcessed.belongsTo(db.LeafSpectra,{constraints: false})
  db.LeafSpectra.hasMany(db.LeafSpectraData, {foreignKey: 'record_id'})

  db.Plants.hasMany(db.BulkLeafSamples, {foreignKey: 'plant'})
};
