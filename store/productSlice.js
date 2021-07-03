import { createSlice } from "@reduxjs/toolkit";
import { fetchInitialProducts } from "./productActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    amznProducts: [],
    productSuggestion: [],
    productResult: [],
    loading: false,
    err: false,
  },
  reducers: {
    getProducts: (state, action) => {
      state.amznProducts = action.payload;
      console.log("Dispatch Called");
    },

    searchProducts: (state, action) => {
      const searchKey = action.payload.trim();
      console.log("Search dispatch called");

      state.productSuggestion =
        searchKey.length > 0
          ? state.amznProducts.filter((product) =>
              product.title.toLowerCase().includes(searchKey)
            )
          : [];
    },

    getProductResult: (state) => {
      state.productResult = [...state.productSuggestion];
    },

    clearProductSuggestion: (state) => {
      state.productSuggestion = [];
    },
  },

  extraReducers: {
    [fetchInitialProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchInitialProducts.fulfilled]: (state, action) => {
      state.amznProducts = action.payload;
      state.loading = false;
    },
    [fetchInitialProducts.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.error.message;
    },
  },
});

export const {
  getProducts,
  searchProducts,
  getProductResult,
  clearProductSuggestion,
} = productSlice.actions;
export default productSlice.reducer;
