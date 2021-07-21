import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInitialProducts = createAsyncThunk(
  "cart/fetchInitialProducts",
  async () => {
    try {
      const res = await axios(`/products.json`);

      const data = res.data;

      return data;
    } catch (err) {
      throw Error(err);
    }
  }
);
