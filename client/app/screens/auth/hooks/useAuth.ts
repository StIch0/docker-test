import { useStackNavigation } from '@app/navigation/hooks'
import { authAction } from '@app/store/auth/actions'
import { useAppDispatch } from '@app/store/hooks'
import { AxiosError, isAxiosError } from 'axios'
import { useCallback } from 'react'
import { UseFormSetError } from 'react-hook-form'
import { AuthForm } from '../types'

const useAuth = (setError: UseFormSetError<AuthForm>) => {
  const navigation = useStackNavigation()

  const dispatch = useAppDispatch()

  const onPressAuth = useCallback((form: AuthForm) => {
    dispatch(authAction(form))
      .then(({ payload }) => {
        if (!isAxiosError(payload)) {
          navigation.reset({ routes: [{ name: 'UsersScreen' }] })
        } else {
          const axiosError = payload as AxiosError<{ message: string }>

          setError('email', { message: axiosError.response?.data.message })
        }
      })
      .catch(error => {
        const axiosError = error as AxiosError<{ message: string }>

        setError('email', { message: axiosError.response?.data.message })
      })
  }, [])

  return onPressAuth
}

export { useAuth }
