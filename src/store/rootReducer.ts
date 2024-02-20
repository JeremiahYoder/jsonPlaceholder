import { combineReducers } from "redux";

import counterReducer from '../slices/counterSlice'
import sessionReducer from '../slices/sessionSlice'
import postsReducer from '../slices/postsSlice'
import usersReducer from "../slices/usersSlice"

export default combineReducers({
    counter: counterReducer,
    session: sessionReducer,
    posts: postsReducer,
    users: usersReducer
});