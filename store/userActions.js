import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
  "cart/fetchUserProfile",
  async (uid) => {
    try {
      const res = await axios(`/userprofiles/${uid}.json`);

      const data = res.data;
      console.log("Get user called");
      console.log("Profile", data);
      return data;
    } catch (err) {
      throw Error(err);
    }
  }
);
