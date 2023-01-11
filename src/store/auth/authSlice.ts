import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    errorMessage: null,
    status: "checking",
    uid: null,
    username: null,
    visitedUrl: "",
  },
  reducers: {
    checkingAuth: (state) => {
      state.errorMessage = null;
      state.status = "checking";
    },
    login: (state, { payload }) => {
      state.email = payload.email;
      state.errorMessage = null;
      state.status = "authenticated";
      state.uid = payload.uid;
      state.username = payload.username;
      state.visitedUrl = payload.visitedUrl;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.email = null;
      state.username = null;
      state.uid = null;
      state.visitedUrl = "";
      state.errorMessage = payload;
    },
  },
});

export const { checkingAuth, login, logout } = authSlice.actions;
