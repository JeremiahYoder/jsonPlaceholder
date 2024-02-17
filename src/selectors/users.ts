import { RootState } from '../store';

export const users = (state: RootState) => state.users.users ?? []
export const isUsersLoading = (state: RootState) => state.users.isFetching