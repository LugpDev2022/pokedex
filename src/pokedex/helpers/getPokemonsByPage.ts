export const getPokemonsByPage = async (page: number, ofset: number = 9) => {
  //TODO: Manage errors
  const pokemons = [];

  for (let i = page * ofset - (ofset - 1); i <= page * ofset; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
      (resp) => resp.json()
    );

    pokemons.push(resp);
  }

  return pokemons;
};
