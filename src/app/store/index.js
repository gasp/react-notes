import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import logger from './middleware/logger'

import rootReducer from './reducer'


export default function configureStore(initialState = {}) {
  const hasDevTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  const saga = createSagaMiddleware()

  const enhancers = [
    hasDevTools ? window.devToolsExtension() : null,
  ].filter(enhancer => !!enhancer)

  const storeFactory = compose(
    applyMiddleware(
      saga,
      logger
    ),
    ...enhancers
  )(createStore)

  const store = storeFactory(rootReducer, initialState)
  store.runSaga = saga.run
  store.close = () => store.dispatch(END)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
