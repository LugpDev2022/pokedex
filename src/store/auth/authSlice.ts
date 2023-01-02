import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // 'not-authenticated', 'authenticated','checking'
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    checkingAuth: (state) => {
      state.status = "checking";
    },
  },
});

export const { checkingAuth } = authSlice.actions;
