import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/user'
import { IDictionary } from '../types/globals';

export interface IUsersState {
    isFetching: boolean;
    currentUser: number | undefined;
    users: IUser[];
    users2: IDictionary<IUser>;
}

const initialState: IUsersState = {
    isFetching: false,
    currentUser: undefined,
    users: [],
    users2: {}
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = [...state.users, ...action.payload]
            state.isFetching = false
        },
        loadUser: (state, action: PayloadAction<IUser>) => {
            state.users = [...state.users, action.payload]
            state.users2[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetUsers: (state) => {
            state.users = initialState.users
        },
        clearUsers: (state) => {
            state.users = []
        },
        setCurrentUser: (state, action: PayloadAction<number>) => {
            state.currentUser = action.payload
        },
        resetCurrentUser: (state) => {
            state.currentUser = initialState.currentUser
        },
        clearCurrentUser: (state) => {
            state.currentUser = undefined
        }
    }
})

export const { 
    setLoading, 
    loadUsers, 
    loadUser, 
    resetUsers, 
    clearUsers,
    setCurrentUser,
    resetCurrentUser,
    clearCurrentUser
} = usersSlice.actions

export default usersSlice.reducer