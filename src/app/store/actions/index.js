// import constantsBuilder from './lib/constantsBuilder'
// // import * as auth from './auth'
// const crudActions = [
//   'FETCH',
//   'FETCH_ONE',
//   'CREATE',
//   'UPDATE',
//   'DELETE',
// ]
//
// export default {
//   ...constantsBuilder('note', crudActions),
// }

export const FETCH_NOTE = 'FETCH_NOTE'
export const FETCH_NOTE_START = 'FETCH_NOTE_START'
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS'
export const FETCH_NOTE_ERROR = 'FETCH_NOTE_ERROR'

export const fetchNote = () => ({ type: FETCH_NOTE })

export const UPDATE_NOTE = 'UPDATE_NOTE'
export const UPDATE_NOTE_START = 'UPDATE_NOTE_START'
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS'
export const UPDATE_NOTE_ERROR = 'UPDATE_NOTE_ERROR'

export const updateNote = () => ({})
