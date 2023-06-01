import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./addToCart";

export const store = configureStore({
  reducer: {
    addedItems: addToCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
