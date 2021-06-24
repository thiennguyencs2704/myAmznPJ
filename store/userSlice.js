import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
  },
});

export const { signin, signout, signup } = userSlice.actions;
export default userSlice.reducer;
