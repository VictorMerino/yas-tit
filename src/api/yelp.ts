import axios from 'axios'
import getEnvVars from '../environment'
const { apiUrl } = getEnvVars()

const baseURL = 'https://api.yelp.com/v3/businesses'
const apiKey = process.env.REACT_APP_YELP_APIKEY

console.log('apiKey: ' + apiKey)
export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
