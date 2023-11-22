import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import { api } from './api/api';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
