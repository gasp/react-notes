import * as constants from '../actions'

const initialState = {
  isLoading: false,
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_NOTE_START: // constant (actions/notes).FETCH
      return { ...state, isLoading: true }
    case constants.FETCH_NOTE_SUCCESS:
      return { isLoading: false, data: action.payload } // no pagination
    case constants.FETCH_NOTE_ERROR:
      return { ...state, isLoading: false }
    case constants.UPDATE_NOTE_SUCCESS:
      // payload = the full note
      console.warn('reducer data', state.data)
      return { ...state,
        data: state.data.map((note) => {
          // return (action.payload.id !== note.id)? note : {
          //   ...note,
          //   isDone: !note.isDone,
          // }
          if (action.payload.id !== note.id) {
            return note
          }
          return {
            ...note,
            isDone: !note.isDone,
          }
        }
      ) } // no pagination
    default:
      return state
  }
}
