import { RootState } from "../store";

export const commentsState = (state: RootState) =>  state.comments

export const comments = (state: RootState) => commentsState(state).comments ?? []