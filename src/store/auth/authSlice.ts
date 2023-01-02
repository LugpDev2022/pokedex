import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // 'not-authenticated', 'authenticated','checking'
    email: null,
    username: null,
    uid: null,
    errorMessage: null,
  },
  reducers: {
    checkingAuth: (state) => {
      state.status = "checking";
    },
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.username = payload.username;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.email = null;
      state.username = null;
      state.uid = null;
      state.errorMessage = payload;
    },
    resetError: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { checkingAuth, login, logout, resetError } = authSlice.actions;
