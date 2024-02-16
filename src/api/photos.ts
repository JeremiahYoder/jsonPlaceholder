import request, { IRequestResponse } from './ApiClient'

export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string
}

export interface IPhotosResponse extends IRequestResponse<Array<IPhoto>> {}
export interface IPhotoResponse extends IRequestResponse<IPhoto> {}

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

// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
