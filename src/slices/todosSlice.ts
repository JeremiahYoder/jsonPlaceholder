import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/todo";
import { IDictionary } from "../types/globals";

export interface ITodosState {
    isFetching: boolean;
    todos: ITodo[]
    todos2: IDictionary<ITodo>
}

const initialState: ITodosState = {
    isFetching: false,
    todos: [],
    todos2: {}
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadTodos: (state, action: PayloadAction<ITodo[]>) => {
            state.todos = [...state.todos, ...action.payload]
            for (const todo of action.payload) {
                state.todos2[todo.id] = todo
            }
            state.isFetching = false
        },
        loadTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = [...state.todos, action.payload]
            state.todos2[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetTodos: (state) => {
            state.todos = initialState.todos
            state.todos2 = initialState.todos2
        },
        clearTodos: (state) => {
            state.todos = []
            state.todos2 = {}
        }
    }
})

export const { setLoading, loadTodos, loadTodo, resetTodos, clearTodos } = todosSlice.actions

export default todosSlice.reducer