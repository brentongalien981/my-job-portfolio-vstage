// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';

const store = configureStore({
  reducer: {
    navigation: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
