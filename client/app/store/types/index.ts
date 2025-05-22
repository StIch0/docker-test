import type {
  UnknownAction,
  Dispatch,
  Reducer,
  PayloadAction as ReduxPayloadAction,
  SliceCaseReducers,
  ThunkDispatch,
  ThunkMiddleware
} from '@reduxjs/toolkit'
import type { PersistPartial } from 'redux-persist/lib/persistReducer'

import FilesystemStorage from 'redux-persist-filesystem-storage'
import { AuthState } from '../auth/types'
import { authServices } from '@app/services/auth'
import { usersServices } from '@app/services/users'
import { UserState } from '../users/types'

type PayloadAction<T> = ReduxPayloadAction<T>

type SliceReducer<T> = SliceCaseReducers<T>

type Dependencies = {
  authServices: typeof authServices
  usersServices: typeof usersServices
}

type PersistConfig = {
  key: 'root'
  storage: typeof FilesystemStorage
  blackList: (keyof MainState)[]
  whitelist: (keyof MainState)[]
}

type RootState = {
  auth: AuthState
  users: UserState
} & PersistPartial

type AppDispatch = Dispatch &
  ThunkDispatch<RootState, Dependencies, UnknownAction>

type ThunkAsyncConfig = {
  extra: Dependencies
  state: RootState
  dispatch: AppDispatch
}

type ThunkMiddlewareOptions = {
  thunk: {
    extraArgument: Dependencies
  }
}

type Middlewares = ThunkMiddleware<
  RootState,
  UnknownAction,
  ThunkMiddlewareOptions
>[]

type MainState = Omit<RootState, '_persist'>

type Reducers = { [K in keyof MainState]: Reducer<MainState[K], UnknownAction> }

enum SlicesName {
  AUTH = 'AUTH',
  USERS = 'USERS'
}

export { SlicesName }

export type {
  AppDispatch,
  Dependencies,
  Middlewares,
  PayloadAction,
  PersistConfig,
  Reducers,
  RootState,
  SliceReducer,
  ThunkAsyncConfig,
  ThunkMiddlewareOptions
}
