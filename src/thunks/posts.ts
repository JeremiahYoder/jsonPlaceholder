import { getPostById, getPosts } from "../api/posts";
import { posts } from "../selectors/posts";
import { loadPosts, loadPost, resetPosts, clearPosts } from "../slices/postsSlice";
import { AppDispatch, RootState } from "../store";

export function loadPostsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPosts = posts(getState())
        if (currPosts?.length) {
            console.log("[loadPostsData]", "POSTS EXIST")
            return
        }

        console.log("[loadPostsData]", "LOADING NEW POSTS")
        getPosts().then(data => {
            if (data) dispatch(loadPosts(data))
        })
    }
}

export function loadPostDataById(id: number = 1) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPosts = posts(getState())
        if (currPosts.findIndex(user => user.id === id) !== -1) return

        getPostById(id?.toString()).then(data => {
            if (data) dispatch(loadPost(data))
        })
    }
}

export const resetPostData = () => (dispatch: AppDispatch) => dispatch(resetPosts())

export const clearPostData = () => (dispatch: AppDispatch) => dispatch(clearPosts())