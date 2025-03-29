import { configureStore, createSelector } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const createAppSelector = createSelector.withTypes<RootState>();
