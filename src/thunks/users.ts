import { getUsers, getUserById, IUser } from '../api/users'
import { users } from '../selectors/users'
import { loadUsers, loadUser, clearUsers, resetUsers, setLoading } from '../slices/usersSlice'
import { AppDispatch, RootState } from '../store'

export function loadUsersData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (currUsers?.length) return

        getUsers().then(data => {
            console.log('[loadUsersData][DISPATCH][getUsers][then]data', data)
            if (data) {
                dispatch(loadUsers(data))
            }
        })
    }
}

export function loadUserDataById(id: number = 1) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (currUsers.findIndex(user => user.id === id) !== -1) {
            return
        }

        getUserById(id.toString()).then(data => {
            console.log('[loadUserDataById][DISPATCH][getUserById][then]data', data)
            if (data) {
                dispatch(loadUser(data))
            }
        })
    }
}