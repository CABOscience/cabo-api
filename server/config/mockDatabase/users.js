
import {
  createBulkWithHooks,
  getUserId
} from './utils'

export default (mockData) => createBulkWithHooks(mockData.db.Users, mockData, [
  {
    name: 'Steve',
    lastname: 'Vissault',
    email: 'steve.vissault@usherbrooke.ca',
    organization: 'Université de Sherbrooke',
    password: '2bchanged'
  },
  {
    name: 'Anouk',
    lastname: 'Simard',
    email: 'Anouk.Simard@mffp.gouv.qc.ca',
    organization: 'MFFP',
    password: '2bchanged'
  },
  {
    name: 'Caroline',
    lastname: 'Dubé',
    email: 'Caroline.Dube@mffp.gouv.qc.ca',
    organization: 'MFFP',
    password: '2bchanged'
  },
  {
    name: 'Dominique',
    lastname: 'Gravel',
    email: 'dominique.gravel@usherbrooke.ca',
    organization: 'Université de Sherbrooke',
    password: '2bchanged'
  },
  {
    name: 'Andrew',
    lastname: 'MacDonald',
    email: 'a.a.m.macdonald@gmail.com',
    organization: 'Université de Montréal',
    password: '2bchanged'
  },
  {
    name: 'Timothée',
    lastname: 'Poisot',
    email: 'timothee.poisot@umontreal.ca',
    organization: 'Université de Montréal',
    password: '2bchanged'
  }
])
