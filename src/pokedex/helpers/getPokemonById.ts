export const getPokemonById = async (pokemonId: number) => {
  try {
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    ).then((resp) => resp.json());
    return {
      ok: true,
      pokemonData,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error,
    };
  }
};
