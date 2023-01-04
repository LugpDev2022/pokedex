import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isDataCharging: false,
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
    setChargingState: (state) => {
      state.isDataCharging = true;
    },
    clearPokemons: (state) => {
      state.isDataCharging = false;
      state.pokemons = [];
      state.page = 1;
    },
  },
});

export const { chargePokemons, changePage, setChargingState, clearPokemons } =
  pokemonSlice.actions;
