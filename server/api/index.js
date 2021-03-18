'use strict'

import apiKeysSetupModel from './v1/ApiKeys'

import usersSetupModel from './v1/Users'
import usersSetupResource from './v1/Users/resource'

import sitesSetupModel from './v1/Sites'
import sitesSetupResource from './v1/Sites/resource'

import plotsSetupModel from './v1/Plots'
import plotsSetupResource from './v1/Plots/resource'

import plantsSetupModel from './v1/Plants'
import plantsSetupResource from './v1/Plants/resource'

import bulkLeafSamplesSetupModel from './v1/BulkLeafSamples'
import bulkLeafSamplesSetupResource from './v1/BulkLeafSamples/resource'

import leafAreaAndWaterSamplesSetupModel from './v1/LeafAreaAndWaterSamples'
import leafAreaAndWaterSamplesSetupResource from './v1/LeafAreaAndWaterSamples/resource'

import leafChemistrySamplesModel from './v1/LeafChemistrySamples'
import leafChemistrySamplesResource from './v1/LeafChemistrySamples/resource'

import icpLeafElementConcentrationsModel from './v1/ICPLeafElementConcentrations'
import icpLeafElementConcentrationsesource from './v1/ICPLeafElementConcentrations/resource'

import cnLeafConcentrationsModel from './v1/CNLeafConcentrations'
import cnLeafConcentrationsesource from './v1/CNLeafConcentrations/resource'

import leafSpectraModel from './v1/LeafSpectra'
import leafSpectraResource from './v1/LeafSpectra/resource'
import leafSpectraReflectanceResource from './v1/LeafSpectra/resource'
import leafSpectraTransmittanceResource from './v1/LeafSpectra/resource'

import leafSpectraDataModel from './v1/LeafSpectraData'
import leafSpectraDataResource from './v1/LeafSpectraData/resource'

// RELATIONSHIPS & HOOKS
import setupHooks from './v1/hooks'
import setupRelations from './v1/relations'

export const setupModels = (db) => {
  // Patch https://github.com/sequelize/sequelize/issues/1500
  db.Validator.notNull = function (item) {
    return !this.isNull(item)
  }

  // Setup models
  apiKeysSetupModel(db)
  usersSetupModel(db)
  sitesSetupModel(db)
  plotsSetupModel(db)
  plantsSetupModel(db)
  bulkLeafSamplesSetupModel(db)
  leafAreaAndWaterSamplesSetupModel(db)
  leafChemistrySamplesModel(db)
  icpLeafElementConcentrationsModel(db)
  cnLeafConcentrationsModel(db)
  leafSpectraModel(db)
  leafSpectraDataModel(db)
  //leafSpectraReflectanceModel(db)
  //leafSpectraTransmittanceModel(db)
  
  // Setup hooks
  setupHooks(db)

  // Setup relationships between models
  setupRelations(db)

  //test(db)
}

export const setupResources = (epilogue, db) => {
  const resources = {}

  // Setup resources
  usersSetupResource(epilogue, db, resources)
  sitesSetupResource(epilogue, db, resources)
  plotsSetupResource(epilogue, db, resources)
  plantsSetupResource(epilogue, db, resources)
  bulkLeafSamplesSetupResource(epilogue, db, resources)
  leafAreaAndWaterSamplesSetupResource(epilogue, db, resources)
  leafChemistrySamplesResource(epilogue, db, resources)
  icpLeafElementConcentrationsesource(epilogue, db, resources)
  cnLeafConcentrationsesource(epilogue, db, resources)
  leafSpectraResource(epilogue, db, resources)
  leafSpectraReflectanceResource(epilogue, db, resources)
  leafSpectraTransmittanceResource(epilogue, db, resources)
  leafSpectraDataResource(epilogue, db, resources)
}


