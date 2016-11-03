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

import fetchAPI from '../../lib/api/fetchApi'

export const FETCH_NOTE = 'FETCH_NOTE'
export const FETCH_NOTE_START = 'FETCH_NOTE_START'
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS'
export const FETCH_NOTE_ERROR = 'FETCH_NOTE_ERROR'

export const fetchNote = () => {
  return dispatch => {
    dispatch({ type: FETCH_NOTE_START })
    fetchAPI({ url: '/note' })
      .then(payload => {
        dispatch({ type: FETCH_NOTE_SUCCESS, payload })
      })
      .catch(err => dispatch({ type: FETCH_NOTE_ERROR, payload: err }))
  }
}

export const UPDATE_NOTE = 'UPDATE_NOTE'
export const UPDATE_NOTE_START = 'UPDATE_NOTE_START'
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS'
export const UPDATE_NOTE_ERROR = 'UPDATE_NOTE_ERROR'

export const updateNote = (note) => {
  return dispatch => {
    if (typeof note === 'undefined' || !('id' in note)) {
      console.log(`%c action, ${note}`, 'background-color: yellow')
      console.log(note)
    }
    dispatch({ type: UPDATE_NOTE_START, payload: note })
    fetchAPI({ url: `/note/${note.id}`, method: 'put', body: JSON.stringify(note) })
      .then(payload => {
        dispatch({ type: UPDATE_NOTE_SUCCESS, payload })
      })
      .catch(err => dispatch({ type: UPDATE_NOTE_ERROR, payload: err }))
  }
}
