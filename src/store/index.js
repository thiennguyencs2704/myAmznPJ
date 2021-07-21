import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: { user: userSlice, cart: cartSlice, products: productSlice },
});
