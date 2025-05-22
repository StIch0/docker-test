import {
  combineReducers,
  configureStore,
  Tuple,
  UnknownAction
} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import persistReducer from 'redux-persist/es/persistReducer'

import { authServices } from '@app/services/auth'

import { authReducer } from './auth/slice'
import { Dependencies, Middlewares, Reducers, RootState } from './types'
import { usersServices } from '@app/services/users'
import { usersReducer } from './users/slice'

const devTools = __DEV__

const dependencies: Dependencies = {
  authServices,
  usersServices
}

const reducers: Reducers = {
  auth: authReducer,
  users: usersReducer
}

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: ['auth']
}

const rootReducer = combineReducers(reducers)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore<RootState, UnknownAction, Tuple<Middlewares>>({
  reducer: persistedReducer,
  devTools,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: dependencies
      }
    })
})

const persistor = persistStore(store)

export { persistor, store }
