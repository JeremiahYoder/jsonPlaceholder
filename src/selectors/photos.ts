import { RootState } from "../store";
import { currentAlbumId } from "./albums";

export const photosState = (state: RootState) => state.photos

export const photos = (state: RootState) => photosState(state).photos ?? []

export const currentAlbumPhotos = (state: RootState) => {
    let albumId = currentAlbumId(state)
    return photos(state).filter(photo => photo.albumId === albumId)
}