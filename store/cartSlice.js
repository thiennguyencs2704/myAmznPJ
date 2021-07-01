import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmt: 0,
  loading: false,
  err: null,
};

const testing = () => {
  console.log(testing);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getLastCart: (state, action) => {
      state.cart = [...action.payload.cart];

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = Number(
        state.cart
          .reduce((acc, item) => acc + item.itemQty * item.price, 0)
          .toFixed(2)
      );
    },

    changeItemQty: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      existingItem.itemQty = selectedItem.itemQty;
    },

    changeCart: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      selectedItem.itemQty < 1
        ? (state.cart = state.cart.filter(
            (item) => item.id !== selectedItem.id
          ))
        : (existingItem.itemQty = selectedItem.itemQty);

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = Number(
        state.cart
          .reduce((acc, item) => acc + item.itemQty * item.price, 0)
          .toFixed(2)
      );
    },

    addCart: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      existingItem
        ? existingItem.itemQty++
        : (state.cart = [selectedItem, ...state.cart]);

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = Number(
        state.cart
          .reduce((acc, item) => acc + item.itemQty * item.price, 0)
          .toFixed(2)
      );
    },

    removeCart: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === selectedItem.id
      );

      existingItem.itemQty < 2
        ? (state.cart = state.cart.filter(
            (item) => item.id !== selectedItem.id
          ))
        : existingItem.itemQty--;

      state.totalQty = state.cart.reduce((acc, item) => acc + item.itemQty, 0);

      state.totalAmt = Number(
        state.cart
          .reduce((acc, item) => acc + item.itemQty * item.price, 0)
          .toFixed(2)
      );
    },
  },
});

export const { addCart, removeCart, changeCart, changeItemQty, getLastCart } =
  cartSlice.actions;
export const selectCart = (state) => {
  console.log(state.cart);
  return state.cart;
};
export default cartSlice.reducer;
