import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currentUserId } from "./users";

export const todosState = (state: RootState) => state.todos

export const todos = createSelector([todosState], (todoState) => todoState.todos)

export const currentUserTodos = createSelector([todos, currentUserId], (todos, userId) => {
    if (todos && userId) return Object.values(todos).filter(todo => todo.userId === userId)
})