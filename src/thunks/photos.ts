import { getPhotoById, getPhotos } from "../api/photos";
import { photos } from "../selectors/photos";
import { clearPhotos, loadPhoto, loadPhotos, resetPhotos } from "../slices/photosSlice";
import { AppDispatch, RootState } from "../store";

export function loadPhotosData() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPhotos = photos(getState())
        if (currPhotos.length) return

        getPhotos().then(response => {
            if (response.data) dispatch(loadPhotos(response.data))
        })
    }
}

export function loadPhotoDataById(id: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const currPhotos = photos(getState())
        if (currPhotos.findIndex(photo => photo.id === id) !== -1) return

        getPhotoById(id + '').then(response => {
            if (response.data) dispatch(loadPhoto(response.data))
        })
    }
}

export const resetPhotosData = () => (dispatch: AppDispatch) => dispatch(resetPhotos())

export const clearPhotosData = () => (dispatch: AppDispatch) => dispatch(clearPhotos())