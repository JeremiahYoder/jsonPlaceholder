import { RootState } from "../store";
import { userState } from "./users";

export const todosState = (state: RootState) => state.todos

export const todos = (state: RootState) => todosState(state).todos ?? []

export const currentUserTodos = (state: RootState) => {
    const currentUserId = userState(state).currentUser
    return todos(state).filter(todo => todo.userId === currentUserId)
}