import { getAlbumById, getAlbums } from "../api/albums";
import { albums } from "../selectors/albums";
import { clearAlbums, loadAlbum, loadAlbums, resetAlbums, resetCurrentAlbum, setCurrentAlbum } from "../slices/albumsSlice";
import { AppDispatch, RootState } from "../store";

export function loadAlbumsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currAlbums = albums(getState())
        if (currAlbums.length) return

        getAlbums().then(data => {
            if (data) dispatch(loadAlbums(data))
        })
    }
}

export function loadAlbumDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currAlbums = albums(getState())
        if (currAlbums.findIndex(album => album.id === id) !== -1) return

        getAlbumById(id + '').then(data => {
            if (data) dispatch(loadAlbum(data))
        })
    }
}

export const resetAlbumData = () => (dispatch: AppDispatch) => dispatch(resetAlbums())

export const clearAlbumData = () => (dispatch: AppDispatch) => dispatch(clearAlbums())

export const loadCurrentAlbum = (id: number) => (dispatch: AppDispatch) => dispatch(setCurrentAlbum(id))

export const unloadCurrentAlbum = () => (dispatch: AppDispatch) => dispatch(resetCurrentAlbum())