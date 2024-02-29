import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currentPostId } from "./posts";

export const commentsState = (state: RootState) =>  state.comments

export const comments = createSelector([commentsState], (commentsState) => commentsState.comments)

export const currentPostComments = createSelector([comments, currentPostId], (comments, postId) => comments.filter(comment => comment.postId === postId))