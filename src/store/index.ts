import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import logger from './logger'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          otherValue: 42
        }
      }
    }).concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch