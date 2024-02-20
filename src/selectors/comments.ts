import { RootState } from "../store";
import { postState } from "./posts";

export const commentsState = (state: RootState) =>  state.comments

export const comments = (state: RootState) => commentsState(state).comments ?? []

export const currentPostComments = (state: RootState) => {
    let postId = postState(state).currentPost
    return comments(state).filter(comment => comment.postId === postId)
}