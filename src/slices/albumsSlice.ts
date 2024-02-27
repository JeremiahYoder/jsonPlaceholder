import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAlbum } from "../types/album";
import { IDictionary } from "../types/globals";

export interface IAlbumState {
    isFetching: boolean
    currentAlbum: number | undefined
    albums: IAlbum[]
    albums2: IDictionary<IAlbum>
}

const initialState: IAlbumState = {
    isFetching: false,
    currentAlbum: undefined,
    albums: [],
    albums2: {}
}

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        loadAlbums: (state, action: PayloadAction<IAlbum[]>) => {
            state.albums = [...state.albums, ...action.payload]
            state.isFetching = false
        },
        loadAlbum: (state, action: PayloadAction<IAlbum>) => {
            state.albums = [...state.albums, action.payload]
            state.albums2[action.payload.id] = action.payload
            state.isFetching = false
        },
        resetAlbums: (state) => {
            state.albums = initialState.albums
        },
        clearAlbums: (state) => {
            state.albums = []
        },
        setCurrentAlbum: (state, action: PayloadAction<number>) => {
            state.currentAlbum = action.payload
        },
        resetCurrentAlbum: (state) => {
            state.currentAlbum = initialState.currentAlbum
        },
        clearCurrentAlbum: (state) => {
            state.currentAlbum = undefined
        }
    }
})

export const { 
    setLoading,
    loadAlbums,
    loadAlbum,
    resetAlbums,
    clearAlbums,
    setCurrentAlbum,
    resetCurrentAlbum,
    clearCurrentAlbum
} = albumsSlice.actions

export default albumsSlice.reducer