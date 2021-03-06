import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQty: 0,
  totalAmt: 0,
  loading: false,
  err: null,
};

const handlerToTalQty = (cart) => {
  return cart.reduce((acc, item) => acc + item.itemQty, 0);
};

const handlerTotalAmt = (cart) => {
  return Number(
    cart.reduce((acc, item) => acc + item.itemQty * item.price, 0).toFixed(2)
  );
};

const handlerExistingItem = (selectedItem, cart) => {
  return cart.find((item) => item.id === selectedItem.id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getLastCart: (state, action) => {
      state.cart = [...action.payload.cart];
      state.totalQty = handlerToTalQty(state.cart);
      state.totalAmt = handlerTotalAmt(state.cart);
    },

    changeItemQty: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = handlerExistingItem(selectedItem, state.cart);

      existingItem.itemQty = selectedItem.itemQty;
    },

    changeCart: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = handlerExistingItem(selectedItem, state.cart);

      selectedItem.itemQty < 1
        ? (state.cart = state.cart.filter(
            (item) => item.id !== selectedItem.id
          ))
        : (existingItem.itemQty = selectedItem.itemQty);

      state.totalQty = handlerToTalQty(state.cart);
      state.totalAmt = handlerTotalAmt(state.cart);
    },

    addCart: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = handlerExistingItem(selectedItem, state.cart);

      existingItem
        ? existingItem.itemQty++
        : (state.cart = [selectedItem, ...state.cart]);

      state.totalQty = handlerToTalQty(state.cart);
      state.totalAmt = handlerTotalAmt(state.cart);
    },

    removeCart: (state, action) => {
      const selectedItem = action.payload;
      const existingItem = handlerExistingItem(selectedItem, state.cart);

      existingItem.itemQty < 2
        ? (state.cart = state.cart.filter(
            (item) => item.id !== selectedItem.id
          ))
        : existingItem.itemQty--;

      state.totalQty = handlerToTalQty(state.cart);
      state.totalAmt = handlerTotalAmt(state.cart);
    },
  },
});

export const { addCart, removeCart, changeCart, changeItemQty, getLastCart } =
  cartSlice.actions;
export const selectCart = (state) => {
  return state.cart;
};
export default cartSlice.reducer;
