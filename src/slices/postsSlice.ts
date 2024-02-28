import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../types/post";
import { IDictionary } from "../types/globals";

export interface IPostsState {
    isFetching: boolean;
    currentPost: number | undefined;
    posts: IPost[]
    posts2: IDictionary<IPost>
}

const initialState: IPostsState = {
    isFetching: false,
    currentPost: undefined,
    posts: [],
    posts2: {}
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = [...state.posts, ...action.payload]
            for (const post of action.payload) {
                state.posts2[post.id] = post
            }
            state.isFetching = false
        },
        loadPost: (state, action: PayloadAction<IPost>) => {
            state.posts = [...state.posts, action.payload]
            state.posts2[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetPosts: (state) => {
            state.posts = initialState.posts
            state.posts2 = initialState.posts2
        },
        clearPosts: (state) => {
            state.posts = []
            state.posts2 = {}
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