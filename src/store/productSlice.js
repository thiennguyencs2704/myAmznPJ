import { createSlice } from "@reduxjs/toolkit";
import { fetchInitialProducts } from "./productActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    amznProducts: [],
    productSuggestion: [],
    productResult: [],
    status: null,
  },
  reducers: {
    getInitialProducts: (state, action) => {
      state.amznProducts = action.payload;
    },

    searchProducts: (state, action) => {
      const searchKey = action.payload.trim();

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
      state.status = "Loading";
    },
    [fetchInitialProducts.fulfilled]: (state, action) => {
      state.amznProducts = action.payload;
      state.status = "Success";
    },
    [fetchInitialProducts.rejected]: (state, action) => {
      state.status = "Failed";
    },
  },
});

export const {
  getInitialProducts,
  searchProducts,
  getProductResult,
  clearProductSuggestion,
} = productSlice.actions;
export default productSlice.reducer;
