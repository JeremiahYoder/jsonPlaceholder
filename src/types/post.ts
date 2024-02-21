import { IRequestResponse } from "../api/ApiClient";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostsResponse extends IRequestResponse<IPost[]> {}
export interface IPostResponse extends IRequestResponse<IPost> {}