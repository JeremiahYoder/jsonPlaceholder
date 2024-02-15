import { increment, decrement } from "../slices/counterSlice"
import type { AppDispatch } from "../store"

// export const incrementCounter = () => (dispatch: AppDispatch) => dispatch(increment())
export function incrementCounter() {
    return (dispatch: AppDispatch) => dispatch(increment())
}

// export const decrementCounter = () => (dispatch: AppDispatch) => dispatch(decrement())
export function decrementCounter() {
    return (dispatch: AppDispatch) => dispatch(decrement())
}