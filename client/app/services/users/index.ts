import { getUsers } from './getUsers'

class UsersServices {
  getUsers = () => getUsers()
}

const usersServices = new UsersServices()

export { usersServices }
