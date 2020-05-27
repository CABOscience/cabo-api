import createUsers from './users'
import createRefSpecies from './refSpecies'

export default (db) => {
  return Promise.resolve()
    .then(() => {
      console.log('---------------------------Mock database in progress----------------------------')
      return {
        db,
        objsByTableName: {}
      }
    })
    // ORDER IS IMPORTANT
    .then(createUsers)
    .then(createRefSpecies)
    .catch((err) => {
      console.log('There was an error while mocking the database : '.red)
      console.log(err)
    })
    .then(() => {
      console.log('-------------------------------Mock database done-------------------------------')
    })
}
