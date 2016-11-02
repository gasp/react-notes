import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducer'


export default function configureStore(initialState = {}) {
  const hasDevTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'

  const enhancers = [
    hasDevTools ? window.devToolsExtension() : null,
  ].filter(enhancer => !!enhancer)

  const storeFactory = compose(
    applyMiddleware(

    ),
    ...enhancers
  )(createStore)

  const store = storeFactory(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
