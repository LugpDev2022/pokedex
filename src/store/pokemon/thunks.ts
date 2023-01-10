import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { getPokemonsByPage, getPokemonById } from "../../pokedex/helpers";
import { AppDispatch } from "../store";
import {
  cancelCharge,
  chargePokemons,
  chargeUniquePokemon,
  setChargingState,
  setPokemonFavourite,
  setSavingState,
  stopSavingState,
} from "./pokemonSlice";

export const startChargingPokemons = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setChargingState());
    const resp = await getPokemonsByPage(page);

    if (!resp.ok) return dispatch(cancelCharge(resp.errorMessage));
    dispatch(chargePokemons(resp.pokemons));
  };
};

export const startChargingUniquePokemon = (pokemonId: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setChargingState());
    const resp = await getPokemonById(pokemonId);

    if (!resp.ok) return dispatch(cancelCharge(resp.errorMessage));
    dispatch(chargeUniquePokemon(resp.pokemonData));
  };
};

export const startAddingFavouritePokemon = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(setSavingState());

    const { uid } = getState().auth;
    const { uniquePokemon } = getState().pokemon;
    const { id, name } = uniquePokemon;

    const docRef = doc(FirebaseDB, `${uid}/pokedexInfo/pokemons/${id}`);
    await setDoc(
      docRef,
      {
        id,
        name,
      },
      { merge: true }
    );

    dispatch(stopSavingState());
  };
};

export const startCheckingPokemon = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { uid } = getState().auth;
    const { uniquePokemon } = getState().pokemon;

    if (!uniquePokemon.id) return;

    const docRef = doc(
      FirebaseDB,
      `${uid}/pokedexInfo/pokemons/${uniquePokemon.id}`
    );
    const docs = await getDoc(docRef);

    if (!docs.exists()) return dispatch(setPokemonFavourite(false));

    dispatch(setPokemonFavourite(true));
  };
};
