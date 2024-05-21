'use client';
import { configureStore } from "@reduxjs/toolkit";
import { posterSlice } from "./posterSlice";


const store = configureStore({
  reducer: posterSlice.reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch