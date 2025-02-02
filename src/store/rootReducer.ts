import { combineReducers } from "redux";

import sessionReducer from '../slices/sessionSlice'
import postsReducer from '../slices/postsSlice'
import usersReducer from "../slices/usersSlice"
import commentsReducer from '../slices/commentsSlice'
import todosReducer from '../slices/todosSlice'
import albumsReducer from '../slices/albumsSlice'
import photosReducer from '../slices/photosSlice'

export default combineReducers({
    session: sessionReducer,
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    todos: todosReducer,
    albums: albumsReducer,
    photos: photosReducer
});