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
      console.log("Keyword", searchKey, searchKey.length);

      state.productSuggestion =
        searchKey.length > 0
          ? state.amznProducts.filter((product) =>
              product.title.toLowerCase().includes(searchKey)
            )
          : [];
      // .slice(0, 5);
      console.log("suggrestproducs", state.productSuggestion);
    },
  },
});

export const { getProducts, searchProducts } = productSlice.actions;
export default productSlice.reducer;