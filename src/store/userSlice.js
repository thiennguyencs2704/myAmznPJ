import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./userActions";

const initialState = {
  user: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signout: (state) => {
      state.user = null;
      state.status = null;
    },
  },

  extraReducers: {
    [fetchUserProfile.pending]: (state) => {
      state.status = "Loading";
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "Success";
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.status = "Failed";
    },
  },
});

export const { signout } = userSlice.actions;
export default userSlice.reducer;

// signin: (state, action) => {
//   state.user = action.payload;
// },
