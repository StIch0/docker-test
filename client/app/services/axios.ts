import { snakeToCamel } from '@app/common/helpers/snakeToCamel'
import { store } from '@app/store'
import Axios from 'axios'
import { API_URL } from 'react-native-dotenv'

const axios = Axios.create({ baseURL: API_URL })

axios.interceptors.response.use(({ data, ...props }) => {
  return {
    data: snakeToCamel(data),
    ...props
  }
})

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.request.use(
  async ({ headers, ...props }) => {
    const updatedHeaders: { [K in string]: string } = {
      ...headers
    }

    const {
      auth: { token }
    } = store.getState()

    if (token) {
      updatedHeaders.authorization = `bearer ${token}`
    }

    return {
      ...props,
      headers: Object.assign(headers, updatedHeaders)
    }
  },
  error => error
)

export { axios }
