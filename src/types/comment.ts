import { IRequestResponse } from "../api/ApiClient";

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface ICommentsResponse extends IRequestResponse<IComment[]> {}
export interface ICommentResponse extends IRequestResponse<IComment> {}