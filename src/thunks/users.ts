import { getUsers, getUserById, getTodosByUserId, getAlbumsByUserId, getPostsByUserId } from '../api/users'
import { currentUserId, users } from '../selectors/users'
import { loadAlbums } from '../slices/albumsSlice'
import { loadPosts } from '../slices/postsSlice'
import { loadTodos } from '../slices/todosSlice'
import { loadUsers, loadUser, clearUsers, resetUsers, setCurrentUser, resetCurrentUser } from '../slices/usersSlice'
import { AppDispatch, RootState } from '../store'

export function loadUsersData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (Object.keys(currUsers).length) {
            return
        }

        getUsers().then(response => {
            if (response.data) dispatch(loadUsers(response.data))
        })
    }
}

export function loadUserDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currUsers = users(getState())
        if (currUsers[id]) return

        getUserById(id.toString()).then(response => {
            if (response.data) {
                dispatch(loadUser(response.data))
            }
        })
    }
}

export const resetUserData = () => (dispatch: AppDispatch) => dispatch(resetUsers())

export const clearUserData = () => (dispatch: AppDispatch) => dispatch(clearUsers())

export const loadCurrentUser = (id: number) => (dispatch: AppDispatch) => dispatch(setCurrentUser(id))

export const unloadCurrentUser = () => (dispatch: AppDispatch) => dispatch(resetCurrentUser())

export const loadUserAlbums = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = currentUserId(getState())
    if (!userId) return

    getAlbumsByUserId(userId.toString()).then(response => {
        if (response.data) {
            dispatch(loadAlbums(response.data))
        }
    })
}

export const loadUserPosts = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = currentUserId(getState())
    if (!userId) return

    getPostsByUserId(userId.toString()).then(response => {
        if (response.data) {
            dispatch(loadPosts(response.data))
        }
    })
}

export const loadUserTodos = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const userId = currentUserId(getState())
    if (!userId) return

    getTodosByUserId(userId.toString()).then(response => {
        if (response.data) {
            dispatch(loadTodos(response.data))
        }
    })
}