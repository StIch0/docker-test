import { useToken } from '@app/store/auth/selectors'
import { useAppDispatch } from '@app/store/hooks'
import { getUsersAction } from '@app/store/users/actions'
import { useEffect } from 'react'

const useUsers = () => {
  const token = useToken()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (token) {
      dispatch(getUsersAction())
    }
  }, [token])
}

export { useUsers }
