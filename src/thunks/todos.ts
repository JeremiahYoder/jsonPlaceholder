import { getTodoById, getTodos } from "../api/todos";
import { todos } from "../selectors/todos";
import { clearTodos, loadTodo, loadTodos, resetTodos } from "../slices/todosSlice";
import { AppDispatch, RootState } from "../store";

export function loadTodosData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currTodos = todos(getState())
        if (currTodos.length) return

        getTodos().then(data => {
            if (data) dispatch(loadTodos(data))
        })
    }
}

export function loadTodoDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currTodos = todos(getState())
        if (currTodos.findIndex(todo => todo.id === id) !== -1) return

        getTodoById(id.toString()).then(data => {
            if (data) dispatch(loadTodo(data))
        })
    }
}

export const resetTodoData = () => (dispatch: AppDispatch) => dispatch(resetTodos())

export const clearTodoData = () => (dispatch: AppDispatch) => dispatch(clearTodos())