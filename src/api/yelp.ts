import axios from 'axios'

import { REACT_APP_YELP_APIKEY } from '@env'

const baseURL = 'https://api.yelp.com/v3/businesses'

// console.log('apiKey: ' + REACT_APP_YELP_APIKEY)
export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${REACT_APP_YELP_APIKEY}`,
  },
})
