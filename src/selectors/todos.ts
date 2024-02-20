import { RootState } from "../store";

export const todosState = (state: RootState) => state.todos

export const todos = (state: RootState) => todosState(state).todos ?? []