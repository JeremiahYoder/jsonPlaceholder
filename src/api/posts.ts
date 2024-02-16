import request, { IRequestResponse } from './ApiClient'
import { ICommentsResponse } from './comments';

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostsResponse extends IRequestResponse<Array<IPost>> {}
export interface IPostResponse extends IRequestResponse<IPost> {}

export const getPosts = (): Promise<IPostsResponse> => {
    return request({
        url: `/posts`,
        method: 'GET'
    })
}

export const getPostById = (id: string): Promise<IPostResponse> => {
    return request({
        url: `/posts/${id}`,
        method: 'GET'
    })
}

export const getCommentsByPostId = (id: string): Promise<ICommentsResponse> => {
    return request({
        url: `/posts/${id}/comments`,
        method: 'GET'
    })
}

export const addPost = (post: IPost): Promise<IPostResponse> => {
    return request({
        url: `/posts`,
        method: 'POST',
        data: post
    })
}

export const updatePostById = (id: string, post: IPost): Promise<IPostResponse> => {
    return request({
        url: `/posts/${id}`,
        method: 'PUT',
        data: post
    })
}

// export const patchPostById = (id: string, attributes): Promise<IPostResponse> => {
//     return request({
//         url: `/posts/${id}`,
//         method: 'PATCH',
//         data: attributes
//     })
// }

export const removePostById = (id: string) => {
    return request({
        url: `/posts/${id}`,
        method: 'DELETE'
    })
}


// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }