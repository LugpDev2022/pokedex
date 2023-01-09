import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isDataCharging: false,
    pokemons: [],
    uniquePokemon: {},
    errorMessage: "",
    page: 1,
  },
  reducers: {
    setChargingState: (state) => {
      state.isDataCharging = true;
    },
    chargePokemons: (state, { payload }) => {
      state.isDataCharging = false;
      state.pokemons = payload;
      state.errorMessage = "";
    },
    chargeUniquePokemon: (state, { payload }) => {
      state.isDataCharging = false;
      state.uniquePokemon = payload;
      state.errorMessage = "";
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
    cancelCharge: (state, { payload }) => {
      state.isDataCharging = false;
      state.pokemons = [];
      state.uniquePokemon = {};
      state.errorMessage = payload;
    },
  },
});

export const {
  chargePokemons,
  changePage,
  setChargingState,
  clearPokemons,
  chargeUniquePokemon,
  cancelCharge,
} = pokemonSlice.actions;
