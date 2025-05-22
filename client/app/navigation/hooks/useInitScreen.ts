import { useToken } from '@app/store/auth/selectors'
import { RootStackParamList } from '../types'

const useInitScreen = (): keyof RootStackParamList => {
  const token = useToken()

  return token ? 'UsersScreen' : 'LaunchScreen'
}

export { useInitScreen }
