import request, { IRequestResponse } from './ApiClient'
import { IAlbumsResponse } from './albums';
import { IPostsResponse } from './posts';
import { ITodosResponse } from './todos';

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface IUsersResponse extends IRequestResponse<IUser[]> {}
export interface IUserResponse extends IRequestResponse<IUser> {}

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



// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },