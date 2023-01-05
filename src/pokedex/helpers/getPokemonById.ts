export const getPokemonById = async (pokemonId: number) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemonData = await resp.json();
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
