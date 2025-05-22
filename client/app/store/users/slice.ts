import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { SlicesName } from '../types'

import { getUsersAction } from './actions'
import type { UserItem, UserState } from './types'

const adapter = createEntityAdapter<UserItem>({})

const initialState: UserState = {
  items: adapter.getInitialState()
}

const slice = createSlice({
  name: SlicesName.AUTH,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsersAction.fulfilled, (state, { payload }) => {
        adapter.setAll(state.items, payload)
      })
      .addMatcher(
        ({ type }) => /logoutAction/g.test(type),
        state => {
          adapter.removeAll(state.items)
        }
      )
  }
})

export { adapter }
export const { reducer: usersReducer } = slice
