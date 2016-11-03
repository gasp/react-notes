import fetch from 'isomorphic-fetch'
import config from '../config'

export default ({ headers, url, ...other }) => {
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
  return fetch(`${config.APIURL}${url}`, httpOptions)
    .then(res => res.json())
}
