import { RootState } from '../store';
import { IUsersState } from '../types/user';
import User from '../models/user'

export const userState = (state: RootState): IUsersState => state.users

export const users = (state: RootState) => userState(state).users

export const currentUserId = (state: RootState) => userState(state).currentUser

// export const currentUser = (state: RootState) => users(state)[2] ?? User()
export const currentUser = (state: RootState) => users(state)[currentUserId(state) as number] ?? User()

export const isUsersLoading = (state: RootState) => userState(state).isFetching