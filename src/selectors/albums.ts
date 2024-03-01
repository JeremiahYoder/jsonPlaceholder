import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currentUserId } from "./users";

export const albumsState = (state: RootState) => state.albums

export const albums = createSelector([albumsState], (albumsState) => albumsState.albums)

export const currentAlbumId = createSelector([albumsState], (albumsState) => albumsState.currentAlbum)

export const currentAlbum = createSelector([albums, currentAlbumId], (albums, albumId) => {
    if (albumId && albums[albumId]) return albums[albumId]
})

export const currentUserAlbums = createSelector([albums, currentUserId], (albums, userId) => {
    if (albums && userId) return Object.values(albums).filter(album => album.userId === userId)
})