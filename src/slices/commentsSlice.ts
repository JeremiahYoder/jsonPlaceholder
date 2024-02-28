import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../types/comment";
import { IDictionary } from "../types/globals";

export interface ICommentsState {
    isFetching: boolean
    comments: IComment[]
    comments2: IDictionary<IComment>
}

const initialState: ICommentsState = {
    isFetching: false,
    comments: [],
    comments2: {}
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = [...state.comments, ...action.payload]
            for (const comment of action.payload) {
                state.comments2[comment.id] = comment
            }
            state.isFetching = false
        },
        loadComment: (state, action: PayloadAction<IComment>) => {
            state.comments = [...state.comments, action.payload]
            state.comments2[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetComments:  (state) => {
            state.comments = initialState.comments
            state.comments2 = initialState.comments2
        },
        clearComments: (state) => {
            state.comments = []
            state.comments2 = {}
        }
    }
})

export const { setLoading, loadComments, loadComment, resetComments, clearComments } = commentsSlice.actions

export default commentsSlice.reducer