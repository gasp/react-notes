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

export const fetchNote = () => ({ type: FETCH_NOTE, payload })
export const fetchNoteStart = () => {
  return {type: FETCH_NOTE_START}
}//({ type: FETCH_NOTE_START, payload })
export const fetchNoteSuccess = () => ({ type: FETCH_NOTE_SUCCESS, payload })
export const fetchNoteError = () => ({ type: FETCH_NOTE_ERROR, payload })
