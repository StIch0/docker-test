import { createAsyncThunk } from '../helpers/createAsyncThunk'
import { SlicesName } from '../types'
import { UserItem } from './types'

const getUsersAction = createAsyncThunk<UserItem[]>(
  `${SlicesName.USERS}/getUsersAction`,
  async (_, { extra: { usersServices } }) => await usersServices.getUsers()
)

export { getUsersAction }
