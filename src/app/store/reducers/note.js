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

    default:
      return state
  }
}
