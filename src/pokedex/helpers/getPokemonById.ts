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
      errorMessage: "",
    };
  } catch (error: any) {
    return {
      ok: false,
      pokemonData: {},
      errorMessage: 'Unexpected error',
    };
  }
};
