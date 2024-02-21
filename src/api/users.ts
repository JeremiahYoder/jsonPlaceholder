import request from './ApiClient'
import { IUser, IUserResponse, IUsersResponse } from '../types/user';
import { IAlbumsResponse } from '../types/album';
import { ITodosResponse } from '../types/todo';
import { IPostsResponse } from '../types/post';

export const getUsers = (): Promise<IUsersResponse> => {
    return request({
        url: `/users`,
        method: 'GET'
    });
}

export const getUserById = (id: string): Promise<IUserResponse> => {
    return request({
        url: `/users/${id}`,
        method: 'GET'
    });
}

export const addUser = (user: IUser): Promise<IUserResponse> => {
    return request({
        url: `/users`,
        method: 'POST',
        data: user
    });
}

export const updateUserById = (id: string, user: IUser): Promise<IUserResponse> => {
    return request({
        url: `/users/${id}`,
        method: 'PUT',
        data: user
    });
}

// export const patchUserById = (id: string, attributes): Promise<IUserResponse> => {
//     return request({
//         url: `/users/${id}`,
//         method: 'PATCH',
//         data: {
//             ...attributes
//         }
//     });
// }

export const removeUserById = (id: string) => {
    return request({
        url: `/users/${id}`,
        method: 'DELETE',
    });
}

export const getAlbumsByUserId = (id: string): Promise<IAlbumsResponse> => {
    return request({
        url: `/users/${id}/albums`,
        method: 'GET'
    });
}


export const getTodosByUserId = (id: string): Promise<ITodosResponse> => {
    return request({
        url: `/users/${id}/todos`,
        method: 'GET'
    });
}

export const getPostsByUserId = (id: string): Promise<IPostsResponse> => {
    return request({
        url: `/users/${id}/posts`,
        method: 'GET'
    });
}