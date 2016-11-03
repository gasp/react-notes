import fetch from 'isomorphic-fetch'
import config from '../config'

export default async ({ headers, url, ...other }) => {
  if (typeof url === 'undefined') {
    throw new Error('API: you mhave to specify an url')
  }
  const httpOptions = {
    ...other,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  const response = await fetch(`${config.APIURL}${url}`, httpOptions)
  return await response.json()
}
