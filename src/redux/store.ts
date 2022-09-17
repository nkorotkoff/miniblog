import { configureStore } from "@reduxjs/toolkit";
import Post from "./slices/postSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    Post,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
