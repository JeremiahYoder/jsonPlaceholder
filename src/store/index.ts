import { configureStore } from '@reduxjs/toolkit'
import logger from './logger'
import {
  persistStore,
  persistedReducer,
  ignoredActions
} from './persistor'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions,
      }
    }).concat(logger),
})

export let persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
