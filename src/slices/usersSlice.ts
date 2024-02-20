import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../api/users'

export interface IUsersState {
    isFetching: boolean;
    users: IUser[];
}

const initialState: IUsersState = {
    isFetching: false,
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload,
            state.isFetching = false
        },
        loadUser: (state, action: PayloadAction<IUser>) => {
            state.users = [...state.users, action.payload]
            state.isFetching = false
        },
        resetUsers: (state) => {
            state.users = initialState.users
        },
        clearUsers: (state) => {
            state.users = []
        }
    }
})

export const { setLoading, loadUsers, loadUser, resetUsers, clearUsers } = usersSlice.actions

export default usersSlice.reducer