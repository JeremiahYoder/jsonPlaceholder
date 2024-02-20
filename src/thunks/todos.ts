import { getTodos } from "../api/todos";
import { todos } from "../selectors/todos";
import { loadTodos } from "../slices/todosSlice";
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