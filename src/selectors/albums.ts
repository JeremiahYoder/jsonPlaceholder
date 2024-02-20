import { RootState } from "../store";
import { userState } from "./users";

export const albumsState = (state: RootState) => state.albums

export const albums = (state: RootState) => albumsState(state).albums ?? []

export const currentUsersAlbums = (state: RootState) => {
    const currentUserId = userState(state).currentUser
    return albums(state).filter(album => album.userId === currentUserId)
}