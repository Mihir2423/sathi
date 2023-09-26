import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.token = true;
    },
    logout: (state) => {
      state.token = false;
    }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
