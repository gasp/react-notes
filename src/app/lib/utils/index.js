export const loadComponent = promisedComponent => async (location, cb) => {
  try {
    const module = await promisedComponent
    cb(null, module.default)
  } catch (err) {
    console.error('Dynamic page loading failed', err)
    cb(err)
  }
}
