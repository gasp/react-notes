import constantsBuilder from './lib/constantsBuilder'
// import * as auth from './auth'
const crudActions = [
  'FETCH',
  'FETCH_ONE',
  'CREATE',
  'UPDATE',
  'DELETE',
]

export default {
  ...constantsBuilder('note', crudActions),
}
