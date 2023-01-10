import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isDataCharging: false,
    isPokemonSaving: false,
    pokemons: [],
    uniquePokemon: {},
    isUniquePokemonFavourite: false,
    errorMessage: "",
    page: 1,
  },
  reducers: {
    setChargingState: (state) => {
      state.isDataCharging = true;
    },
    setSavingState: (state) => {
      state.isPokemonSaving = true;
    },
    stopSavingState: (state) => {
      state.isPokemonSaving = false;
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
      state.isUniquePokemonFavourite = false;
    },
    cancelCharge: (state, { payload }) => {
      state.isDataCharging = false;
      state.pokemons = [];
      state.uniquePokemon = {};
      state.errorMessage = payload;
    },
    setPokemonFavourite: (state, { payload }) => {
      state.isUniquePokemonFavourite = payload;
    },
  },
});

export const {
  chargePokemons,
  setSavingState,
  stopSavingState,
  changePage,
  setChargingState,
  clearPokemons,
  chargeUniquePokemon,
  cancelCharge,
  setPokemonFavourite,
} = pokemonSlice.actions;
