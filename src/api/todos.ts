import request, { IRequestResponse } from './ApiClient'

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodosResponse extends IRequestResponse<Array<ITodo>> {}
export interface ITodoResponse extends IRequestResponse<ITodo> {}

export const getTodos = (): Promise<ITodosResponse> => {
    return request({
        url: `/todos`,
        method: 'GET'
    })
}

export const getTodoById = (id: string): Promise<ITodoResponse> => {
    return request({
        url: `/todos/${id}`,
        method: 'GET'
    })
}

export const addTodo = (todo: ITodo): Promise<ITodoResponse> => {
    return request({
        url: `/todos`,
        method: 'POST',
        data: todo
    })
}

export const updateTodoById = (id: string, todo: ITodo): Promise<ITodoResponse> => {
    return request({
        url: `/todos/${id}`,
        method: 'PUT',
        data: todo
    })
}

// export const patchTodoById = (id: string, attributes): Promise<ITodoResponse> => {
//     return request({
//         url: `/todos/${id}`,
//         method: 'PATCH',
//         data: {
//             ...attributes
//         }
//     })
// }

export const removeTodoById = (id: string) => {
    return request({
        url: `/todos/${id}`,
        method: 'DELETE'
    })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },