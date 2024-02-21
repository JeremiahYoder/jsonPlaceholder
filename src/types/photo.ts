import { IRequestResponse } from "../api/ApiClient";

export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string
}

export interface IPhotosResponse extends IRequestResponse<IPhoto[]> {}
export interface IPhotoResponse extends IRequestResponse<IPhoto> {}