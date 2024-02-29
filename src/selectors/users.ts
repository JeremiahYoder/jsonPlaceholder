import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUsersState } from '../types/user';

export const userState = (state: RootState): IUsersState => state.users

export const users = createSelector([userState], (userState) => userState.users)

export const currentUserId = createSelector([userState], (userState) => userState.currentUser)

export const currentUser = createSelector([users, currentUserId], (users, userId) => {
    if (userId && users[userId]) return users[userId]
})

export const isUsersLoading = createSelector([userState], (userState) => userState.isFetching)