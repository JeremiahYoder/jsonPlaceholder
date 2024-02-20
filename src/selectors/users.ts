import { RootState } from '../store';
import { IUsersState } from '../slices/usersSlice';

export const userState = (state: RootState): IUsersState => state.users
export const users = (state: RootState) => userState(state).users ?? []
export const currentUser = (state: RootState) => {
    const UserState = userState(state)
    return UserState.users.find(user => user.id === UserState.currentUser)

}
export const isUsersLoading = (state: RootState) => userState(state).isFetching