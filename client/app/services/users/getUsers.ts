import { UserItem } from '@app/store/users/types'
import { axios } from '../axios'
import { Endpoints } from '../constants'

const getUsers = async () => {
  try {
    const { data } = await axios.get<UserItem[]>(Endpoints.USERS)

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export { getUsers }
