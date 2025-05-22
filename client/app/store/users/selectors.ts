import { createSelector } from '@reduxjs/toolkit'
import { useAppSelector } from '../hooks'
import { RootState } from '../types'
import { adapter } from './slice'

const selector = adapter.getSelectors(
  createSelector(
    (state: RootState) => state,
    ({ users: { items } }: RootState) => items
  )
)

const useUserItemById = (id: number) =>
  useAppSelector((state: RootState) => selector.selectById(state, id))

const useUserItemIdx = () => useAppSelector(selector.selectIds) as number[]

export { useUserItemById, useUserItemIdx }
