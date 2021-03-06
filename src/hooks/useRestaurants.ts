import { useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  })
  const searchRestaurants = async (term: string) => {
    try {
      setResults({
        data: null,
        loading: true,
        error: null,
      })
      const response = await yelp.get('/search', {
        params: {
          limit: 12,
          term,
          location: 'Toronto',
        },
      })
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      })
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error,
      })
    }
  }
  return [results, searchRestaurants]
}
