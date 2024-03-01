import { getTodoById, getTodos } from "../api/todos";
import { todos } from "../selectors/todos";
import { clearTodos, loadTodo, loadTodos, resetTodos } from "../slices/todosSlice";
import { AppDispatch, RootState } from "../store";

export function loadTodosData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currTodos = todos(getState())
        if (Object.keys(currTodos).length) return

        getTodos().then(response => {
            if (response.data) dispatch(loadTodos(response.data))
        })
    }
}

export function loadTodoDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currTodos = todos(getState())
        if (currTodos[id]) return

        getTodoById(id.toString()).then(response => {
            if (response.data) dispatch(loadTodo(response.data))
        })
    }
}

export const resetTodoData = () => (dispatch: AppDispatch) => dispatch(resetTodos())

export const clearTodoData = () => (dispatch: AppDispatch) => dispatch(clearTodos())