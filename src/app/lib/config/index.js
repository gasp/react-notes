export default {
  APIURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://localhost:3002',
}
