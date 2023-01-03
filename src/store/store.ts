import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { pokemonSlice } from "./pokemon";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
