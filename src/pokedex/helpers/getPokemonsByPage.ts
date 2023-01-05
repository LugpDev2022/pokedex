import { getPokemonById } from "./getPokemonById";

export const getPokemonsByPage = async (page: number, ofset: number = 8) => {
  try {
    const numberOfPokemons = Array.from(
      { length: ofset },
      (_, i) => page * ofset - (ofset - 1) + i
    );

    const pokemons = await Promise.all(
      numberOfPokemons.map((number) => getPokemonById(number))
    );

    return {
      ok: true,
      pokemons,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error,
    };
  }
};
