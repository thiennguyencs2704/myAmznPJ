import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getProducts, searchProducts } from "./productSlice";

export const fetchInitialProducts = createAsyncThunk(
  "cart/fetchUser",
  async () => {
    try {
      const res = await fetch(
        `https://my-amzn-web-default-rtdb.firebaseio.com/products.json`
      );

      const data = await res.json();

      return data;
    } catch (err) {
      throw Error(err);
    }
  }
);

// export const filterSearchProducts = () => {
//   console.log("Func triggered");
//   return (dispatch, myProducts, searchKeyword) => {
//     console.log("Check myProducts", myProducts);
//     dispatch(getProducts(myProducts));
//     dispatch(searchProducts(searchKeyword));
//   };
// };
