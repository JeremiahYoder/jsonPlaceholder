import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../api/posts";

export interface IPostsState {
    isFetching: boolean;
    posts: IPost[]
}

const initialState: IPostsState = {
    isFetching: false,
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
        }
    }
})

export const { setLoading, loadPosts, loadPost, resetPosts, clearPosts } = postsSlice.actions

export default postsSlice.reducer