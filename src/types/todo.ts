import { IRequestResponse } from "../api/ApiClient";

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodosResponse extends IRequestResponse<ITodo[]> {}
export interface ITodoResponse extends IRequestResponse<ITodo> {}