import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isDataCharging: false,
    isPokemonSaving: false,
    pokemons: [],
    uniquePokemon: {},
    favouritePokemons: [],
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
    stopSavingState: (state, { payload }) => {
      state.uniquePokemon = { ...state.uniquePokemon, isFavourite: payload };
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
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    prevPage: (state) => {
      state.page = state.page - 1;
    },
    clearPokemons: (state) => {
      state.isDataCharging = false;
      state.pokemons = [];
      state.uniquePokemon = {};
      state.page = 1;
      state.favouritePokemons = [];
    },
    cancelCharge: (state, { payload }) => {
      state.isDataCharging = false;
      state.pokemons = [];
      state.uniquePokemon = {};
      state.favouritePokemons = [];
      state.errorMessage = payload;
    },
    chargeFavouritePokemons: (state, { payload }) => {
      state.isDataCharging = false;
      state.favouritePokemons = payload;
      state.errorMessage = "";
    },
  },
});

export const {
  cancelCharge,
  chargeFavouritePokemons,
  chargePokemons,
  chargeUniquePokemon,
  clearPokemons,
  nextPage,
  prevPage,
  setChargingState,
  setSavingState,
  stopSavingState,
} = pokemonSlice.actions;
