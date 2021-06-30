import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    amznProducts: [],
    productSuggestion: [],
    productResult: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.amznProducts = action.payload;
    },

    searchProducts: (state, action) => {
      const searchKey = action.payload.trim();
      console.log(searchKey);

      state.productSuggestion = state.amznProducts.filter((product) =>
        product.title.toLowerCase().includes(searchKey)
      );

      state.productResult = state.amznProducts.filter((product) =>
        product.title.toLowerCase().includes(searchKey)
      );
    },

    clearProductSuggestion: (state) => {
      state.productSuggestion = [];
    },
  },
});

export const { getProducts, searchProducts, clearProductSuggestion } =
  productSlice.actions;
export default productSlice.reducer;
