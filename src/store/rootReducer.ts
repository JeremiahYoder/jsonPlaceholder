import { combineReducers } from "redux";

import counterReducer from '../slices/counterSlice'
import sessionReducer from '../slices/sessionSlice'

export default combineReducers({
    counter: counterReducer,
    session: sessionReducer
});