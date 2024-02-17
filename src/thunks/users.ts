import { getUsers, getUserById, IUser } from '../api/users'
import { loadUsers, loadUser, clearUsers, resetUsers, setLoading } from '../slices/usersSlice'
import { AppDispatch, RootState } from '../store'

export function loadUserDataById() {
    return (dispatch: AppDispatch) => {
        getUserById('1').then(response => {
            console.log('[THUNK]', 'response')
            console.log('[THUNK]status', response.status)
            if (response.data) {
                console.log('[THUNK]')
                dispatch(loadUser(response.data))
            }
        })
    }
}