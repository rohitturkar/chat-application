import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  auth: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    SET_AUTH: (state, action) => {
      state.auth = action.payload;
    },
  },

});

export const { SET_AUTH } = authSlice.actions;
export default authSlice.reducer;
