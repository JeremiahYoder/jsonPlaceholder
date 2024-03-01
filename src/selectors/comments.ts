import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currentPostId } from "./posts";

export const commentsState = (state: RootState) =>  state.comments

export const comments = createSelector([commentsState], (commentsState) => commentsState.comments)

export const currentPostComments = createSelector([comments, currentPostId], (comments, postId) => {
    if (comments && postId) return Object.values(comments).filter(comment => comment.postId === postId)
})