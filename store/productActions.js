import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInitialProducts = createAsyncThunk(
  "cart/fetchInitialProducts",
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
