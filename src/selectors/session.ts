import { RootState } from "../store";

export const isAuthenticated = (state: RootState) => state.session?.isAuth