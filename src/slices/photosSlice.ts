import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../types/photo";

export interface IPhotosState {
    isFetching: boolean
    photos: IPhoto[]
}

const initialState: IPhotosState = {
    isFetching: false,
    photos: []
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadPhotos: (state, action: PayloadAction<IPhoto[]>) => {
            state.photos = [...state.photos, ...action.payload]
            state.isFetching = false
        },
        loadPhoto: (state, action: PayloadAction<IPhoto>) => {
            state.photos = [...state.photos, action.payload]
            state.isFetching = false
        },
        resetPhotos: (state) => {
            state.photos = initialState.photos
        },
        clearPhotos: (state) => {
            state.photos = []
        }
    }
})

export const { setLoading, loadPhotos, loadPhoto, resetPhotos, clearPhotos } = photosSlice.actions

export default photosSlice.reducer