import { IRequestResponse } from "../api/ApiClient";
import { IDictionary } from "./globals";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface IUsersResponse extends IRequestResponse<IUser[]> {}
export interface IUserResponse extends IRequestResponse<IUser> {}

export interface IUsersState {
    isFetching: boolean;
    currentUser: number | undefined;
    users: IDictionary<IUser>;
}