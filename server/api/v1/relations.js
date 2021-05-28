'use strict'
export default function (db) {
  // ApiKeys
  db.ApiKeys.belongsTo(db.Users, {
    onDelete: 'CASCADE'
  })

  db.Sites.hasMany(db.Plots,{foreignKey: 'site_id'})
  db.Plots.hasMany(db.Plants,{foreignKey: 'plot_id'})
  db.Sites.hasMany(db.Plants,{foreignKey: 'site', sourceKey:'fulcrum_id'})
  db.Plants.belongsTo(db.Sites,{foreignKey: 'site', sourceKey:'fulcrum_id'})
  db.BulkLeafSamples.hasMany(db.LeafSpectra,{foreignKey: 'sample_id', sourceKey:'sample_id'})
  db.BulkLeafSamples.hasMany(db.LeafAreaAndWaterSamples,{foreignKey: 'sample_id', sourceKey:'sample_id'})
  db.LeafChemistrySamples.hasMany(db.ICPLeafElementConcentrations,{foreignKey: 'leaf_chemistry_sample', sourceKey:'fulcrum_id'})
  db.LeafChemistrySamples.hasMany(db.CNLeafConcentrations,{foreignKey: 'leaf_chemistry_sample', sourceKey:'fulcrum_id'})
  db.LeafChemistrySamples.hasMany(db.CarbonFractionsBags,{foreignKey: 'leaf_chemistry_sample', sourceKey:'fulcrum_id'})
  db.CarbonFractionsBags.hasOne(db.CarbonFractions,{foreignKey: 'fulcrum_id', sourceKey:'fulcrum_parent_id'})
  db.PigmentsExtracts.hasOne(db.Pigments,{foreignKey:'fulcrum_id', sourceKey: 'fulcrum_parent_id' })
  db.LeafAreaAndWaterSamples.hasOne(db.LeafDisks,{foreignKey: 'sample', sourceKey:'sample'})
  db.LeafDisks.belongsTo(db.LeafAreaAndWaterSamples, {foreignKey: 'sample', targetKey: 'sample'})
  db.LeafDisks.hasOne(db.PigmentsExtracts, {foreignKey: 'leaf_disk_sample', sourceKey: 'fulcrum_id'})
  db.PigmentsExtracts.belongsTo(db.LeafDisks, {foreignKey: 'leaf_disk_sample', sourceKey: 'fulcrum_id'})
  db.LeafDisks.hasOne(db.Cryoboxes, {foreignKey: 'fulcrum_id', sourceKey: 'box'})
  db.Cryoboxes.belongsTo(db.LeafDisks, {foreignKey: 'fulcrum_id', sourceKey: 'box'})
  db.Plants.hasOne(db.ProjectsPermissions, {foreignKey: 'project', sourceKey: 'project'} )


  //db.LeafSpectra.hasMany(db.LeafSpectraTransmittances, {as: 'transmittances', foreignKey: 'record_id'})
  //db.LeafSpectraData.belongsTo(db.LeafSpectra,{constraints: false})
  //db.LeafSpectraProcessed.belongsTo(db.LeafSpectra,{constraints: false})
  db.LeafSpectra.hasMany(db.LeafSpectraData, {foreignKey: 'record_id'})

  db.Plants.hasMany(db.BulkLeafSamples, {foreignKey: 'plant'})
};
