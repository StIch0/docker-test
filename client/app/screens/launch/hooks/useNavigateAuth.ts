import { useStackNavigation } from '@app/navigation/hooks'
import { useCallback } from 'react'

const useNavigateAuth = () => {
  const navigation = useStackNavigation()

  const onNavigate = useCallback(() => {
    navigation.navigate('AuthScreen')
  }, [])

  return onNavigate
}

export { useNavigateAuth }
