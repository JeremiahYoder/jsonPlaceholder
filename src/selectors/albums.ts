import { RootState } from "../store";
import { currentUserId } from "./users";

export const albumsState = (state: RootState) => state.albums

export const albums = (state: RootState) => albumsState(state).albums ?? []

export const currentAlbumId = (state: RootState) => albumsState(state).currentAlbum

export const currentAlbum = (state: RootState) => {
    const albumId = currentAlbumId(state)
    return albums(state).find(album => album.id === albumId)
}

export const currentUserAlbums = (state: RootState) => {
    const userId = currentUserId(state)
    return albums(state).filter(album => album.userId === userId)
}