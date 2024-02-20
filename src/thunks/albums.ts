import { getAlbums } from "../api/albums";
import { albums } from "../selectors/albums";
import { loadAlbums } from "../slices/albumsSlice";
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