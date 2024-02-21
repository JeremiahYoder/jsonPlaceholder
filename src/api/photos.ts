import request from './ApiClient'
import { IPhotosResponse, IPhotoResponse, IPhoto } from '../types/photo'

export const getPhotos = (): Promise<IPhotosResponse> => {
    return request({
        url: `/photos`,
        method: 'GET'
    })
}

export const getPhotoById = (id: string): Promise<IPhotoResponse> => {
    return request({
        url: `/photos/${id}`,
        method: 'GET'
    })
}

export const addPhoto = (photo: IPhoto): Promise<IPhotoResponse> => {
    return request({
        url: `/photos`,
        method: 'POST',
        data: photo
    })
}

export const updatePhotoById = (id: string, photo: IPhoto): Promise<IPhotoResponse> => {
    return request({
        url: `/photos/${id}`,
        method: 'PUT',
        data: photo
    })
}

// export const patchPhotoById = (id: string, attributes): Promise<IPhotoResponse> => {
//     return request({
//         url: `/photos/${id}`,
//         method: 'PATCH',
//         data: attributes
//     })
// }

export const removePhotoById = (id: string) => {
    return request({
        url: `/photos/${id}`,
        method: 'DELETE'
    })
}