import { Axios, AxiosError } from 'axios'
import { createAsyncThunk } from '../helpers/createAsyncThunk'
import { SlicesName } from '../types'

const authAction = createAsyncThunk<
  string,
  { email: string; password: string }
>(
  `${SlicesName.AUTH}/authAction`,
  async ({ email, password }, { extra: { authServices }, rejectWithValue }) => {
    try {
      const token = await authServices.authUser({ email, password })
      return token
    } catch (error) {
      return rejectWithValue(error as AxiosError)
    }
  }
)

export { authAction }
