import { EntityState } from '@reduxjs/toolkit'

type UserItem = {
  id: number
  email: string
}

type UserState = {
  items: EntityState<UserItem, number>
}

export { UserState, UserItem }
