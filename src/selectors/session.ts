import { RootState } from "../store";
import { ISessionState } from "../slices/sessionSlice";

export const sessionState = (state: RootState): ISessionState => state.session
export const isAuthenticated = (state: RootState) => sessionState(state).isAuth