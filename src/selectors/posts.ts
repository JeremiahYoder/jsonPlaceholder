import { RootState } from '../store'
import { IPostsState } from '../slices/postsSlice'
import { currentUserId } from './users'

export const postState = (state: RootState): IPostsState => state.posts
export const posts = (state: RootState) => postState(state).posts ?? []
export const isPostsLoading = (state: RootState) => postState(state).isFetching

export const currentPostId = (state: RootState) => postState(state).currentPost

export const currentPost = (state: RootState) => {
    let postId = currentPostId(state)
    return posts(state).find(post => post.id === postId)
}

export const currentUserPosts = (state: RootState) => {
    const userId = currentUserId(state)
    return posts(state).filter(post => post.userId === userId)
}