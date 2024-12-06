// redux/index.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import blogReducer from './async/blogSlice';
import testimonialsReducer from './async/testimonialSlice';
import contactReducer from './async/contactSlice';
import portfolioReducer from './async/portfolioSlice';
import teamReducer from './async/teamSlice';
import storage from 'redux-persist/lib/storage';

// Create a persist configuration
const persistConfig = {
  key: 'root', // key for the persisted state
  storage, // storage engine (localStorage in this case)
};

// Combine your reducers
const rootReducer = combineReducers({
  blogs: blogReducer,
  portfolios: portfolioReducer,
  testimonials: testimonialsReducer,
  contact: contactReducer,
  teams: teamReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
