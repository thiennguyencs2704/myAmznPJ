import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
  "cart/fetchUser",
  async (uid) => {
    try {
      const res = await fetch(
        `https://my-amzn-web-default-rtdb.firebaseio.com/userprofiles/${uid}.json`
      );

      const data = await res.json();

      return data;
    } catch (err) {
      throw Error(err);
    }
  }
);
