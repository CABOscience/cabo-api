
import _ from 'lodash'

export const createBulk = (model, mockData, data, options) => {
  console.log(`Create ${model.getTableName()}`)

  return model.bulkCreate(data, {
    returning: true,
    ...options
  })
    .then((objs) => {
      mockData.objsByTableName[model.getTableName()] = objs.map((obj) => obj.dataValues)
      return mockData
    })
}

export const createBulkWithHooks = (model, mockData, data, options) => {
  console.log(`Create ${model.getTableName()}`)

  // Create individual obj, model.createBulk is weird for hooks and virtuals
  return Promise.all(data.map((obj) => model.create(obj, options)))
    .then((objs) => {
      mockData.objsByTableName[model.getTableName()] = objs.map((obj) => obj.dataValues)
      return mockData
    })
}

export const getRefSpeciesId = (mockData, vernacular) => _.find(mockData.objsByTableName.ref_species, (obj) => obj.vernacular ? obj.vernacular.toLowerCase() === vernacular.toLowerCase() : false).id
export const getCampaignId = (mockData, type, offset) => _.find(mockData.objsByTableName.campaigns, (c) => c.type === type).id + offset
export const getCellId = (mockData, cell_code) => _.find(mockData.objsByTableName.cells, (c) => c.cell_code === cell_code).id
export const getSiteId = (mockData, site_code) => _.find(mockData.objsByTableName.sites, (s) => s.site_code === site_code).id
export const getLureId = (mockData, type) => _.find(mockData.objsByTableName.lures, (l) => l.type === type).id
export const getUserId = (mockData, email) => _.find(mockData.objsByTableName.users, (u) => u.email === email).id
export const getOffStationCodeId = (mockData, code) => _.find(mockData.objsByTableName.offStationCodes, (o) => o.code === code).id
