import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
  "cart/fetchUserProfile",
  async (uid) => {
    try {
      const res = await fetch(
        `https://my-amzn-web-default-rtdb.firebaseio.com/userprofiles/${uid}.json`
      );

      const data = await res.json();
      console.log("Get user called");
      console.log("Profile", data);
      return data;
    } catch (err) {
      throw Error(err);
    }
  }
);
