import { RootState } from '../store'
import { IPostsState } from '../slices/postsSlice'
import { userState } from './users'

export const postState = (state: RootState): IPostsState => state.posts
export const posts = (state: RootState) => postState(state).posts ?? []
export const isPostsLoading = (state: RootState) => postState(state).isFetching

export const currentUserPosts = (state: RootState) => {
    const currentUserId = userState(state).currentUser
    return posts(state).filter(post => post.userId === currentUserId)
}