import { AxiosError } from 'axios'
import { axios } from '../axios'
import { Endpoints } from '../constants'

type OwnProps = {
  email: string
  password: string
}

const authUser = async (variables: OwnProps) => {
  try {
    const { data } = await axios.post<{ token: string }>(
      Endpoints.LOGIN,
      variables
    )

    const { token } = data || {}

    return token || ''
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>

    return Promise.reject(axiosError)
  }
}

export { authUser }
