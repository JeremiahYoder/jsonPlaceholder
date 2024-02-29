import { createSelector } from '@reduxjs/toolkit' 
import { RootState } from '../store'
import { IPostsState } from '../slices/postsSlice'
import { currentUserId } from './users'

export const postState = (state: RootState): IPostsState => state.posts

export const posts = createSelector([postState], (postState) => postState.posts)

export const isPostsLoading = createSelector([postState], (postState) => postState.isFetching)

export const currentPostId = createSelector([postState], (postState) => postState.currentPost)

export const currentPost = createSelector([posts, currentPostId], (posts, postId) => posts.find(post => post.id === postId))

export const currentUserPosts = createSelector([posts, currentUserId], (posts, userId) => posts.filter(post => post.userId === userId))