import { RootState } from '../store'
import { IPostsState } from '../slices/postsSlice'

export const postState = (state: RootState): IPostsState => state.posts
export const posts = (state: RootState) => postState(state).posts ?? []
export const isPostsLoading = (state: RootState) => postState(state).isFetching