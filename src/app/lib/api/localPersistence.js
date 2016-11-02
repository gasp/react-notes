import localForage from 'localforage'

const localCollections = new Map()

export const getStore = name => {
  if (!localCollections.get(name)) {
    localCollections.set(name, localForage.createInstance({
      name,
    }))
  }
  return localCollections.get(name)
}
