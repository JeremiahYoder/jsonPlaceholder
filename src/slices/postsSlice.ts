import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../types/post";
import { IDictionary } from "../types/globals";
import { isEqual } from "../utils/lodash";

export interface IPostsState {
    isFetching: boolean;
    currentPost: number | undefined;
    posts: IDictionary<IPost>
}

const initialState: IPostsState = {
    isFetching: false,
    currentPost: undefined,
    posts: {}
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            for (const post of action.payload) {
                if (!isEqual(state.posts[post.id], post)) {
                    state.posts[post.id] = post
                }
            }
            state.isFetching = false
        },
        loadPost: (state, action: PayloadAction<IPost>) => {
            state.posts[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetPosts: (state) => {
            state.posts = initialState.posts
        },
        clearPosts: (state) => {
            state.posts = {}
        },
        setCurrentPost: (state, action: PayloadAction<number>) => {
            state.currentPost = action.payload
        },
        resetCurrentPost: (state) => {
            state.currentPost = initialState.currentPost
        },
        clearCurrentPost: (state) => {
            state.currentPost = undefined
        }
    }
})

export const { 
    setLoading,
    loadPosts,
    loadPost,
    resetPosts,
    clearPosts,
    setCurrentPost,
    resetCurrentPost,
    clearCurrentPost
} = postsSlice.actions

export default postsSlice.reducer