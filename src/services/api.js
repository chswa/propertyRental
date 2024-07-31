// services/api.js
import axios from 'axios'

export const getProperties = () => {
  return axios.get('/api/properties')
}
