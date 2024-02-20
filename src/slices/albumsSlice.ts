import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAlbum } from "../api/albums";

export interface IAlbumState {
    isFetching: boolean
    albums: IAlbum[]
}

const initialState: IAlbumState = {
    isFetching: false,
    albums: []
}

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadAlbums: (state, action: PayloadAction<IAlbum[]>) => {
            state.albums = action.payload
            state.isFetching = false
        },
        loadAlbum: (state, action: PayloadAction<IAlbum>) => {
            state.albums = [...state.albums, action.payload]
            state.isFetching = false
        },
        resetAlbums: (state) => {
            state.albums = initialState.albums
        },
        clearAlbums: (state) => {
            state.albums = []
        }
    }
})

export const { setLoading, loadAlbums, loadAlbum, resetAlbums, clearAlbums } = albumsSlice.actions

export default albumsSlice.reducer