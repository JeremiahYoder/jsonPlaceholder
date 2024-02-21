import { RootState } from "../store";
import { currentPostId } from "./posts";

export const commentsState = (state: RootState) =>  state.comments

export const comments = (state: RootState) => commentsState(state).comments ?? []

export const currentPostComments = (state: RootState) => {
    let postId = currentPostId(state)
    return comments(state).filter(comment => comment.postId === postId)
}