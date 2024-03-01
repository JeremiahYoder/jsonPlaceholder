import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../types/comment";
import { IDictionary } from "../types/globals";
import { isEqual } from "../utils/lodash";

export interface ICommentsState {
    isFetching: boolean
    comments: IDictionary<IComment>
}

const initialState: ICommentsState = {
    isFetching: false,
    comments: {}
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadComments: (state, action: PayloadAction<IComment[]>) => {
            for (const comment of action.payload) {
                if (!isEqual(state.comments[comment.id], comment)) {
                    state.comments[comment.id] = comment
                }
            }
            state.isFetching = false
        },
        loadComment: (state, action: PayloadAction<IComment>) => {
            if (!isEqual(state.comments[action.payload.id], action.payload)) {
                state.comments[action.payload.id] = action.payload
            }
            state.isFetching = false
        },
        resetComments:  (state) => {
            state.comments = initialState.comments
        },
        clearComments: (state) => {
            state.comments = {}
        }
    }
})

export const { setLoading, loadComments, loadComment, resetComments, clearComments } = commentsSlice.actions

export default commentsSlice.reducer