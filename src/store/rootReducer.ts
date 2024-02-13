import { combineReducers } from "redux";

import counterReducer from '../slices/counterSlice'

export default combineReducers({
    counter: counterReducer,
});