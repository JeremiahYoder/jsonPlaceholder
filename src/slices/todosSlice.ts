import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/todo";

export interface ITodosState {
    isFetching: boolean;
    todos: ITodo[]
}

const initialState: ITodosState = {
    isFetching: false,
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadTodos: (state, action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload,
            state.isFetching = false
        },
        loadTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = [...state.todos, action.payload]
            state.isFetching = false
        },
        resetTodos: (state) => {
            state.todos = initialState.todos
        },
        clearTodos: (state) => {
            state.todos = []
        }
    }
})

export const { setLoading, loadTodos, loadTodo, resetTodos, clearTodos } = todosSlice.actions

export default todosSlice.reducer