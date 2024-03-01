import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../types/photo";
import { IDictionary } from "../types/globals";
import { isEqual } from "../utils/lodash";

export interface IPhotosState {
    isFetching: boolean
    photos: IDictionary<IPhoto>
}

const initialState: IPhotosState = {
    isFetching: false,
    photos: {}
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadPhotos: (state, action: PayloadAction<IPhoto[]>) => {
            for (const photo of action.payload) {
                if (!isEqual(state.photos[photo.id], photo)) {
                    state.photos[photo.id] = photo
                }
            }
            state.isFetching = false
        },
        loadPhoto: (state, action: PayloadAction<IPhoto>) => {
            if (!isEqual(state.photos[action.payload.id], action.payload)) {
               state.photos[action.payload.id] = action.payload 
            }
            state.isFetching = false
        },
        resetPhotos: (state) => {
            state.photos = initialState.photos
        },
        clearPhotos: (state) => {
            state.photos = {}
        }
    }
})

export const { setLoading, loadPhotos, loadPhoto, resetPhotos, clearPhotos } = photosSlice.actions

export default photosSlice.reducer