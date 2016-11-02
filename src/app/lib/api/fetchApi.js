import fetch from 'isomorphic-fetch'
import config from '../config'

export default ({ headers, url, ...other }) => {
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
