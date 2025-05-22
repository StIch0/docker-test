import { useStackNavigation } from '@app/navigation/hooks'
import { logoutAction } from '@app/store/auth/slice'
import { useAppDispatch } from '@app/store/hooks'
import { Button } from '@app/ui/components/Button'
import { useCallback } from 'react'
import { StyleSheet } from 'react-native'

const LogoutButtonView = () => {
  const dispatch = useAppDispatch()

  const navigation = useStackNavigation()

  const onPressLogout = useCallback(() => {
    dispatch(logoutAction())
    navigation.reset({ routes: [{ name: 'LaunchScreen' }] })
  }, [])
  return (
    <Button style={styles.container} onPress={onPressLogout} text='Выйти' />
  )
}

export { LogoutButtonView }

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 14
  }
})
