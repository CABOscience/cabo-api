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
import icpLeafElementConcentrationsResource from './v1/ICPLeafElementConcentrations/resource'

import cnLeafConcentrationsModel from './v1/CNLeafConcentrations'
import cnLeafConcentrationsResource from './v1/CNLeafConcentrations/resource'

import carbonFractionsModel from './v1/CarbonFractions'
import carbonFractionsResource from './v1/CarbonFractions/resource'

import carbonFractionsBagsModel from './v1/CarbonFractionsBags'
import carbonFractionsBagsResource from './v1/CarbonFractionsBags/resource'

import leafSpectraModel from './v1/LeafSpectra'
import leafSpectraResource from './v1/LeafSpectra/resource'
import leafSpectraReflectanceResource from './v1/LeafSpectra/resource'
import leafSpectraTransmittanceResource from './v1/LeafSpectra/resource'

import leafSpectraDataModel from './v1/LeafSpectraData'
import leafSpectraDataResource from './v1/LeafSpectraData/resource'

import pigmentsModel from './v1/Pigments'
import pigmentsResource from './v1/Pigments/resource'

import pigmentsExtractsModel from './v1/PigmentsExtracts'
import pigmentsExtractsResource from './v1/PigmentsExtracts/resource'

import leafDisksModel from './v1/LeafDisks'
import leafDisksResource from './v1/LeafDisks/resource'

import cryoboxesModel from './v1/Cryoboxes'
import cryoboxesResource from './v1/Cryoboxes/resource'

import projectPermissionModel from './v1/ProjectPermission'
import projectPermissionResource from './v1/ProjectPermission/resource'

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
  carbonFractionsModel(db)
  carbonFractionsBagsModel(db)
  leafSpectraModel(db)
  leafSpectraDataModel(db)
  pigmentsModel(db)
  pigmentsExtractsModel(db)
  leafDisksModel(db)
  cryoboxesModel(db)
  projectPermissionModel(db)

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
  icpLeafElementConcentrationsResource(epilogue, db, resources)
  cnLeafConcentrationsResource(epilogue, db, resources)
  carbonFractionsResource(epilogue, db, resources)
  carbonFractionsBagsResource(epilogue, db, resources)
  leafSpectraResource(epilogue, db, resources)
  leafSpectraReflectanceResource(epilogue, db, resources)
  leafSpectraTransmittanceResource(epilogue, db, resources)
  leafSpectraDataResource(epilogue, db, resources)
  pigmentsResource(epilogue, db, resources)
  pigmentsExtractsResource(epilogue, db, resources)
  leafDisksResource(epilogue, db, resources)
  cryoboxesResource(epilogue, db, resources)
  projectPermissionResource(epilogue, db, resources)
}


