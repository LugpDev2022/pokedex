import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isDataCharging: false,
    pokemons: [],
    uniquePokemon: {},
    page: 1,
  },
  reducers: {
    setChargingState: (state) => {
      state.isDataCharging = true;
    },
    chargePokemons: (state, { payload }) => {
      state.isDataCharging = false;
      state.pokemons = payload;
    },
    chargeUniquePokemon: (state, { payload }) => {
      state.isDataCharging = false;
      state.uniquePokemon = payload;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearPokemons: (state) => {
      state.isDataCharging = false;
      state.pokemons = [];
      state.uniquePokemon = {};
      state.page = 1;
    },
  },
});

export const {
  chargePokemons,
  changePage,
  setChargingState,
  clearPokemons,
  chargeUniquePokemon,
} = pokemonSlice.actions;
