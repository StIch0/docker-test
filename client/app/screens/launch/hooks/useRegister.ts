import { useStackNavigation } from '@app/navigation/hooks'
import { axios } from '@app/services/axios'
import { Endpoints } from '@app/services/constants'
import { authAction } from '@app/store/auth/actions'
import { useAppDispatch } from '@app/store/hooks'
import { UserItem } from '@app/store/users/types'
import { AxiosError } from 'axios'
import { useCallback } from 'react'
import { UseFormSetError } from 'react-hook-form'
import { RegisterForm } from '../types'

const useRegister = (setError: UseFormSetError<RegisterForm>) => {
  const dispatch = useAppDispatch()

  const navigation = useStackNavigation()

  const onRegister = useCallback(async (form: RegisterForm) => {
    try {
      const { data } = await axios.post<UserItem>(Endpoints.REGISTER, form)
      if (data?.id) {
        dispatch(authAction(form)).then(() => {
          navigation.navigate('UsersScreen')
        })
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>

      setError('email', { message: axiosError.response?.data.message })
      return Promise.reject(error)
    }
  }, [])

  return onRegister
}

export { useRegister }
