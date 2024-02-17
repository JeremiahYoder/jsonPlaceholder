import { combineReducers } from "redux";

import counterReducer from '../slices/counterSlice'
import sessionReducer from '../slices/sessionSlice'
import usersReducer from "../slices/usersSlice";

export default combineReducers({
    counter: counterReducer,
    session: sessionReducer,
    users: usersReducer
});