import request, { IRequestResponse } from './ApiClient'

export interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

export interface IAlbumsResponse extends IRequestResponse<Array<IAlbum>> {}
export interface IAlbumResponse extends IRequestResponse<IAlbum> {}

export const getAlbums = (): Promise<IAlbumsResponse> => {
    return request({
        url: `/albums`,
        method: 'GET'
    })
}

export const getAlbumById = (id: string): Promise<IAlbumResponse> => {
    return request({
        url: `/albums/${id}`,
        method: 'GET'
    })
}

export const addAlbum = (album: IAlbum): Promise<IAlbumResponse> => {
    return request({
        url: `/albums`,
        method: 'POST',
        data: album
    })
}

export const updateAlbumById = (id: string, album: IAlbum): Promise<IAlbumResponse> => {
    return request({
        url: `/albums/${id}`,
        method: 'PUT',
        data: album
    })
}

// export const patchAlbumById = (id: string, attributes): Promise<IAlbumResponse> => {
//     return request({
//         url: `/albums/${id}`,
//         method: 'PATCH',
//         data: attributes
//     })
// }

export const removeAlbumById = (id: string) => {
    return request({
        url: `/albums/${id}`,
        method: 'DELETE'
    })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "quidem molestiae enim"
//   },