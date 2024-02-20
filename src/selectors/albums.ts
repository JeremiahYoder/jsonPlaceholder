import { RootState } from "../store";

export const albumsState = (state: RootState) => state.albums

export const albums = (state: RootState) => albumsState(state).albums ?? []