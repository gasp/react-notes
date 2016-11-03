import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import * as constants from '../actions'
import fetchApi from '../../lib/api/fetchApi'

const getApiGenerator = (httpParams) => {
  return function* myGen(action) {
    yield put({ type: `${action.type}_START` })
    try {
      const payload = yield call(fetchApi, httpParams)
      yield put({ type: `${action.type}_SUCCESS`, payload })
    } catch (err) {
      yield put({ type: `${action.type}_ERROR`, err })
    }
  }
}

export default function* noteSaga() {
  console.log(getApiGenerator);
  yield takeEvery(constants.FETCH_NOTE, getApiGenerator({ url: '/note' }))
}
