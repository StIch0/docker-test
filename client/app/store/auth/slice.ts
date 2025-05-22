import { createSlice } from '@reduxjs/toolkit'

import { SlicesName } from '../types'

import { authAction } from './actions'
import type { AuthState } from './types'

const initialState: AuthState = {
  token: ''
}

const slice = createSlice({
  name: SlicesName.AUTH,
  initialState,
  reducers: {
    logoutAction: state => {
      state.token = ''
    }
  },
  extraReducers: builder => {
    builder.addCase(authAction.fulfilled, (state, { payload }) => {
      state.token = payload
    })
  }
})

export const {
  reducer: authReducer,
  actions: { logoutAction }
} = slice
