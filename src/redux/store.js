import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import contactReducer from './pb-reducer';
import logger from 'redux-logger';

// const persistConfig = {
//   key: 'my-contacts',
//   storage,
// };



const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
  logger
];
  
// const contactsPersistConfig = {
//   key: 'my-contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contacts:  contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;