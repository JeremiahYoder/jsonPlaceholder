import { IRequestResponse } from "../api/ApiClient";

export interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

export interface IAlbumsResponse extends IRequestResponse<IAlbum[]> {}
export interface IAlbumResponse extends IRequestResponse<IAlbum> {}