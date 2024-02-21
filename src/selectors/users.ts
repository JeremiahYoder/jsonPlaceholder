import { RootState } from '../store';
import { IUsersState } from '../slices/usersSlice';

export const userState = (state: RootState): IUsersState => state.users
export const users = (state: RootState) => userState(state).users ?? []

export const currentUserId = (state: RootState) => userState(state).currentUser

export const currentUser = (state: RootState) => {
    const userId = currentUserId(state)
    return users(state).find(user => user.id === userId)

}
export const isUsersLoading = (state: RootState) => userState(state).isFetching