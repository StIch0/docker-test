import { authUser } from './authUser'

class AuthServices {
  authUser = (variables: Parameters<typeof authUser>[0]) => authUser(variables)
}

const authServices = new AuthServices()

export { authServices }
