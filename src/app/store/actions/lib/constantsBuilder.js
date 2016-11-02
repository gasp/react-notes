export default (entity, actions = []) => {
  return actions.reduce((obj, val) => {
    const CONSTANT = `${entity.toUpperCase()}_${val}`
    return {
      [CONSTANT]: CONSTANT,
      [`${CONSTANT}_START`]: `${CONSTANT}_START`,
      [`${CONSTANT}_SUCCESS`]: `${CONSTANT}_SUCCESS`,
      [`${CONSTANT}_ERROR`]: `${CONSTANT}_ERROR`,
      [`${CONSTANT}_RETRY`]: `${CONSTANT}_ERROR`,
    }
  }, { })
}
