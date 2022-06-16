import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
