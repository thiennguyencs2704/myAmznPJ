import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./cartActions";

const initialState = {
  user: null,
  loading: false,
  err: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signout: (state) => {
      state.user = null;
    },
  },

  extraReducers: {
    [fetchUserProfile.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.error.message;
    },
  },
});

export const { signout } = userSlice.actions;
export default userSlice.reducer;

// signin: (state, action) => {
//   state.user = action.payload;
// },
