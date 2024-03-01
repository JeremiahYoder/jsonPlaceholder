import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/todo";
import { IDictionary } from "../types/globals";
import { isEqual } from "../utils/lodash";

export interface ITodosState {
    isFetching: boolean;
    todos: IDictionary<ITodo>
}

const initialState: ITodosState = {
    isFetching: false,
    todos: {},
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadTodos: (state, action: PayloadAction<ITodo[]>) => {
            for (const todo of action.payload) {
                if (!isEqual(state.todos[todo.id], todo)) {
                    state.todos[todo.id] = todo
                }
            }
            state.isFetching = false
        },
        loadTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetTodos: (state) => {
            state.todos = initialState.todos
        },
        clearTodos: (state) => {
            state.todos = {}
        }
    }
})

export const { setLoading, loadTodos, loadTodo, resetTodos, clearTodos } = todosSlice.actions

export default todosSlice.reducer