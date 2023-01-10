import { doc, getDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const isPokemonFavourite = async ({
  uid,
  pokemonId,
}: {
  uid: string;
  pokemonId: number;
}) => {
  const docRef = doc(FirebaseDB, `${uid}/pokedexInfo/pokemons/${pokemonId}`);
  const respDoc = await getDoc(docRef);

  return respDoc.exists();
};
