import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currentAlbumId } from "./albums";

export const photosState = (state: RootState) => state.photos

export const photos = createSelector([photosState], (photosState) => photosState.photos)

export const currentAlbumPhotos = createSelector([photos, currentAlbumId], (photos, albumId) => photos.filter(photo => photo.albumId === albumId))