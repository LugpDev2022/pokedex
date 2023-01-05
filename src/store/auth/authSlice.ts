import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'not-authenticated', 'authenticated','checking'
    email: null,
    username: null,
    uid: null,
    errorMessage: null,
    visitedUrl: "",
  },
  reducers: {
    checkingAuth: (state) => {
      state.status = "checking";
      state.errorMessage = null;
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
      state.visitedUrl = "";
      state.errorMessage = payload;
    },
    resetError: (state) => {
      state.errorMessage = null;
    },
    setVisitedUrl: (state, { payload }) => {
      state.visitedUrl = payload;
    },
  },
});

export const { checkingAuth, login, logout, resetError, setVisitedUrl } =
  authSlice.actions;
