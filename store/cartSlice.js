import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmt: 0,
  updatedCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeItemQty: (state, action) => {
      const selectedItem = action.payload.cart;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      existingItem.itemQty = selectedItem.itemQty;
    },
    changeCart: (state, action) => {
      const selectedItem = action.payload.cart;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      selectedItem.itemQty < 1
        ? (state.cart = state.cart.filter(
            (item) => item.id !== selectedItem.id
          ))
        : (existingItem.itemQty = selectedItem.itemQty);

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = state.cart
        .reduce((acc, item) => acc + item.itemQty * item.price, 0)
        .toFixed(2);
    },

    addCart: (state, action) => {
      const selectedItem = action.payload.cart;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      existingItem
        ? existingItem.itemQty++
        : (state.cart = [selectedItem, ...state.cart]);

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = state.cart
        .reduce((acc, item) => acc + item.itemQty * item.price, 0)
        .toFixed(2);
    },

    removeCart: (state, action) => {
      const selectedItem = action.payload.cart;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      existingItem.itemQty < 2
        ? (state.cart = state.cart.filter(
            (item) => item.id !== selectedItem.id
          ))
        : existingItem.itemQty--;

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = state.cart
        .reduce((acc, item) => acc + item.itemQty * item.price, 0)
        .toFixed(2);
    },
  },
});

export const { addCart, removeCart, changeCart, changeItemQty } =
  cartSlice.actions;
export const selectCart = (state) => {
  console.log(state.cart);
  return state.cart;
};
export default cartSlice.reducer;
