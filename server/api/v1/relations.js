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
  //db.LeafSpectra.hasMany(db.LeafSpectraTransmittances, {as: 'transmittances', foreignKey: 'record_id'})
  //db.LeafSpectraData.belongsTo(db.LeafSpectra,{constraints: false})
  //db.LeafSpectraProcessed.belongsTo(db.LeafSpectra,{constraints: false})
  db.LeafSpectra.hasMany(db.LeafSpectraData, {foreignKey: 'record_id'})

  db.Plants.hasMany(db.BulkLeafSamples, {foreignKey: 'plant'})
};
