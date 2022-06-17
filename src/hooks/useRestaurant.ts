import { useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  })
  const searchRestaurant = async (id: string) => {
    try {
      setResult({
        data: null,
        loading: true,
        error: null,
      })
      const response = await yelp.get(`/${id}`)
      setResult({
        data: response.data,
        loading: false,
        error: null,
      })
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error,
      })
    }
  }
  return [results, searchRestaurant]
}
