import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    amznProducts: [],
    productSuggestion: [],
  },
  reducers: {
    getProducts: (state, action) => {
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
  },
});

export const { getProducts, searchProducts } = productSlice.actions;
export default productSlice.reducer;
