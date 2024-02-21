import request from './ApiClient'
import { IAlbumsResponse, IAlbumResponse, IAlbum } from '../types/album'

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