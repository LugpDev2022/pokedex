import { getPokemonsByPage } from "../../pokedex/helpers";
import { getPokemonById } from "../../pokedex/helpers/getPokemonById";
import { AppDispatch } from "../store";
import {
  chargePokemons,
  chargeUniquePokemon,
  setChargingState,
} from "./pokemonSlice";

export const startChargingPokemons = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setChargingState());
    const resp = await getPokemonsByPage(page);

    //TODO: Handle error
    if (!resp.ok) return;
    dispatch(chargePokemons(resp.pokemons));
  };
};

export const startChargingUniquePokemon = (pokemonId: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setChargingState());
    const resp = await getPokemonById(pokemonId);

    //TODO: Handle error
    if (!resp.ok) return;
    dispatch(chargeUniquePokemon(resp.pokemonData));
  };
};
