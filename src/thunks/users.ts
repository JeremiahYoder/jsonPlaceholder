import { getUsers, getUserById } from '../api/users'
import { users } from '../selectors/users'
import { loadUsers, loadUser, clearUsers, resetUsers } from '../slices/usersSlice'
import { AppDispatch, RootState } from '../store'

export function loadUsersData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (currUsers?.length) {
            console.log("[loadUsersData]", "USERS EXISTING")
            return
        }

        console.log("[loadUsersData]", "LOADING NEW USERS")
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