import request from './ApiClient'
import { ICommentsResponse, ICommentResponse, IComment } from '../types/comment'

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