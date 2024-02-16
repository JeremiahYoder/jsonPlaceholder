import request, { IRequestResponse } from './ApiClient'

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface ICommentsResponse extends IRequestResponse<Array<IComment>> {}
export interface ICommentResponse extends IRequestResponse<IComment> {}

export const getComments = (): Promise<ICommentsResponse> => {
    return request({
        url: `/comments`,
        method: 'GET'
    })
}

export const getCommentById = (id: string): Promise<ICommentResponse> => {
    return request({
        url: `/comments/${id}`,
        method: 'GET'
    })
}

export const getCommentsByPostId = (id: string): Promise<ICommentsResponse> => {
    return request({
        url: `/comments?postId=${id}`,
        method: 'GET'
    })
}

export const addComment = (comment: IComment): Promise<ICommentResponse> => {
    return request({
        url: `/comments`,
        method: 'POST',
        data: comment
    })
}

export const updateCommentById = (id: string, comment: IComment): Promise<ICommentResponse> => {
    return request({
        url: `/comments/${id}`,
        method: 'PUT',
        data: comment
    })
}

// export const patchCommentById = (id: string, attributes): Promise<ICommentResponse> => {
//     return request({
//         url: `/comments/${id}`,
//         method: 'PATCH',
//         data: attributes
//     })
// }

export const removeCommentById = (id: string) => {
    return request({
        url: `/comments/${id}`,
        method: 'DELETE'
    })
}


// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },