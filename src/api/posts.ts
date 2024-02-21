import request from './ApiClient'
import { IPostsResponse, IPostResponse, IPost } from '../types/post'
import { ICommentsResponse } from '../types/comment'

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