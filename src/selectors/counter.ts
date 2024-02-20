import { RootState } from "../store";
import { ICounterState } from "../slices/counterSlice";

export const counterState = (state: RootState): ICounterState => state.counter
export const getCount = (state: RootState) => counterState(state).value