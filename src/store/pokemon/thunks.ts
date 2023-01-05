import { getPokemonsByPage } from "../../pokedex/helpers";
import { AppDispatch } from "../store";
import { chargePokemons, setChargingState } from "./pokemonSlice";

export const startChargingPokemons = (page: number) => {
  return async (dispatch:AppDispatch) => {
    dispatch(setChargingState());
    const pokemonsArray = await getPokemonsByPage(page);
    dispatch(chargePokemons(pokemonsArray));
  };
};
