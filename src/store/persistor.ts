import { 
    persistReducer, 
    persistStore,
    FLUSH, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER, 
    REHYDRATE, 
  } from 'redux-persist';

  import storage from './storage'
  import rootReducer from './rootReducer';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['session', 'counter']
  }
  
 const persistedReducer = persistReducer(persistConfig, rootReducer);
  
 const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

 export { persistStore, persistedReducer, ignoredActions }