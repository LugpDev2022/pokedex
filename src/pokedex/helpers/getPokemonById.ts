export const getPokemonById = async (pokemonId: number) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const { name, id, types, weight, height, sprites } = await resp.json();

    return {
      ok: true,
      pokemonData: {
        name,
        id,
        types,
        weight,
        height,
        sprites,
      },
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error,
    };
  }
};
