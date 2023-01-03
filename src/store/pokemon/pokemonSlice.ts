import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isDataCharging: true,
    pokemons: [],
    page: 1,
  },
  reducers: {
    chargePokemons: (state, { payload }) => {
      state.isDataCharging = false;
      state.pokemons = payload;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { chargePokemons, changePage } = pokemonSlice.actions;
