import { RootState } from "../store";
import { currentUserId } from "./users";

export const todosState = (state: RootState) => state.todos

export const todos = (state: RootState) => todosState(state).todos ?? []

export const currentUserTodos = (state: RootState) => {
    const userId = currentUserId(state)
    return todos(state).filter(todo => todo.userId === userId)
}