export default (store) => {
  return (next) => (action) => {
    const prevState = store.getState()
    const returnValue = next(action)
    const nextState = store.getState()

    console.group(action.type)
    console.log('%c action', 'color: #be003d', action)
    console.log('%c prev state', 'color: #990434', prevState)
    console.log('%c next state', 'color: #990434', nextState)
    console.groupEnd()
    return returnValue
  }
}
