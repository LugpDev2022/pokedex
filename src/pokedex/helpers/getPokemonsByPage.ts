export const getPokemonsByPage = async (page: number) => {
  const { results } = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${(page - 1) * 8}`
  ).then((resp) => resp.json());

  const si = await results.map(({ url }: any) => {
    fetch(url)
      .then((data) => data.json())
      .then((resp) => resp);
  });

  console.log(si);
};
