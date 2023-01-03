export const getPokemonsByPage = async (page: number) => {
  const pokemons = [];
  for (let i = page * 8 - 7; i <= page * 8; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
      (resp) => resp.json()
    );

    pokemons.push(resp);
  }

  return pokemons;
};
