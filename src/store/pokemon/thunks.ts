import { deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  getPokemonsByPage,
  getPokemonById,
  isPokemonFavourite,
} from "../../pokedex/helpers";
import { AppDispatch } from "../store";
import {
  cancelCharge,
  chargePokemons,
  chargeUniquePokemon,
  setChargingState,
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
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(setChargingState());

    const resp = await getPokemonById(pokemonId);
    if (!resp.ok) return dispatch(cancelCharge(resp.errorMessage));

    const { uid } = getState().auth;
    const isFavourite = await isPokemonFavourite(uid, pokemonId);

    dispatch(chargeUniquePokemon({ ...resp.pokemonData, isFavourite }));
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

    dispatch(stopSavingState(true));
  };
};

export const startDeletingFavouritePokemon = () => {
  return async (dispatch: AppDispatch, getState: any) => {
    dispatch(setSavingState());

    const { uid } = getState().auth;
    const { uniquePokemon } = getState().pokemon;
    await deleteDoc(
      doc(FirebaseDB, `${uid}/pokedexInfo/pokemons/${uniquePokemon.id}`)
    );

    dispatch(stopSavingState(false));
  };
};
