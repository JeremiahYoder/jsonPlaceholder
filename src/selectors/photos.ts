import { RootState } from "../store";

export const photosState = (state: RootState) => state.photos

export const photos = (state: RootState) => photosState(state).photos ?? []