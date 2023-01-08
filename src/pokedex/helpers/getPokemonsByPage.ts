export const getPokemonsByPage = async (page: number, ofset: number = 8) => {
  try {
    const numberOfPokemons = Array.from(
      { length: ofset },
      (_, i) => page * ofset - (ofset - 1) + i
    );

    const responses = await Promise.all(
      numberOfPokemons.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      )
    );
    const pokemons = await Promise.all(
      responses.map((response) => response.json())
    );

    return {
      ok: true,
      pokemons,
      errorMessage: "",
    };
  } catch (error: any) {
    return {
      ok: false,
      pokemons: [],
      errorMessage: "Unexpected error",
    };
  }
};
