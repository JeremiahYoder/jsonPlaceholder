import { getUsers, getUserById } from '../api/users'
import { users } from '../selectors/users'
import { loadUsers, loadUser, clearUsers, resetUsers, setCurrentUser, resetCurrentUser } from '../slices/usersSlice'
import { AppDispatch, RootState } from '../store'

export function loadUsersData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (currUsers?.length) {
            return
        }

        getUsers().then(data => {
            if (data) dispatch(loadUsers(data))
        })
    }
}

export function loadUserDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (currUsers.findIndex(user => user.id === id) !== -1) return

        getUserById(id.toString()).then(data => {
            if (data) dispatch(loadUser(data))
        })
    }
}

export const resetUserData = () => (dispatch: AppDispatch) => dispatch(resetUsers())

export const clearUserData = () => (dispatch: AppDispatch) => dispatch(clearUsers())

export const loadCurrentUser = (id: number) => (dispatch: AppDispatch) => dispatch(setCurrentUser(id))

export const unloadCurrentUser = () => (dispatch: AppDispatch) => dispatch(resetCurrentUser())