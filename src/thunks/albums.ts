import { AppDispatch, RootState } from "../store";
import { getAlbumById, getAlbums } from "../api/albums";
import { albums } from "../selectors/albums";
import { 
    clearAlbums, 
    loadAlbum, 
    loadAlbums, 
    resetAlbums, 
    resetCurrentAlbum, 
    setCurrentAlbum 
} from "../slices/albumsSlice";

export function loadAlbumsData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currAlbums = albums(getState())
        if (Object.keys(currAlbums).length) return

        getAlbums().then(response => {
            if (response.data) dispatch(loadAlbums(response.data))
        })
    }
}

export function loadAlbumDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currAlbums = albums(getState())
        if (currAlbums[id]) return

        getAlbumById(id + '').then(response => {
            if (response.data) dispatch(loadAlbum(response.data))
        })
    }
}

export const resetAlbumData = () => (dispatch: AppDispatch) => dispatch(resetAlbums())

export const clearAlbumData = () => (dispatch: AppDispatch) => dispatch(clearAlbums())

export const loadCurrentAlbum = (id: number) => (dispatch: AppDispatch) => dispatch(setCurrentAlbum(id))

export const unloadCurrentAlbum = () => (dispatch: AppDispatch) => dispatch(resetCurrentAlbum())