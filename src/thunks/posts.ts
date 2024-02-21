import { getPostById, getPosts } from "../api/posts";
import { posts } from "../selectors/posts";
import { loadPosts, loadPost, resetPosts, clearPosts, setCurrentPost, resetCurrentPost } from "../slices/postsSlice";
import { AppDispatch, RootState } from "../store";

export function loadPostsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPosts = posts(getState())
        if (currPosts?.length) {
            return
        }

        getPosts().then(response => {
            if (response.data) dispatch(loadPosts(response.data))
        })
    }
}

export function loadPostDataById(id: number = 1) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPosts = posts(getState())
        if (currPosts.findIndex(user => user.id === id) !== -1) return

        getPostById(id?.toString()).then(response => {
            if (response.data) dispatch(loadPost(response.data))
        })
    }
}

export const resetPostData = () => (dispatch: AppDispatch) => dispatch(resetPosts())

export const clearPostData = () => (dispatch: AppDispatch) => dispatch(clearPosts())

export const loadCurrentPost = (id: number) => (dispatch: AppDispatch) => dispatch(setCurrentPost(id))

export const unloadCurrentPost = () => (dispatch: AppDispatch) => dispatch(resetCurrentPost())