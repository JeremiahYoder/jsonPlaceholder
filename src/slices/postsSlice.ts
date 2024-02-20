import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../api/posts";

export interface IPostsState {
    isFetching: boolean;
    currentPost: number | undefined;
    posts: IPost[]
}

const initialState: IPostsState = {
    isFetching: false,
    currentPost: undefined,
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload,
            state.isFetching = false
        },
        loadPost: (state, action: PayloadAction<IPost>) => {
            state.posts = [...state.posts, action.payload],
            state.isFetching = false
        },
        resetPosts: (state) => {
            state.posts = initialState.posts
        },
        clearPosts: (state) => {
            state.posts = []
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