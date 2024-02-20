import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../api/comments";

export interface ICommentState {
    isFetching: boolean
    comments: IComment[]
}

const initialState: ICommentState = {
    isFetching: false,
    comments: []
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
            state.isFetching = false
        },
        loadComment: (state, action: PayloadAction<IComment>) => {
            state.comments = [...state.comments, action.payload]
            state.isFetching = false
        },
        resetComments:  (state) => {
            state.comments = initialState.comments
        },
        clearComments: (state) => {
            state.comments = []
        }
    }
})

export const { setLoading, loadComments, loadComment, resetComments, clearComments } = commentsSlice.actions

export default commentsSlice.reducer