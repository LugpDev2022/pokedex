type PokemonType = {
  type: {
    name: string;
  };
};

export const getPokemonType = (typesArray: PokemonType[]): string => {
  //Handle errors
  if (!typesArray) throw new Error('"typesArray" not defined');
  if (typesArray.length < 1) throw new Error('The array is empty');

  if (typesArray.length === 1) return `TYPE: ${typesArray[0].type.name}`;

  let types: string = "TYPES: ";

  typesArray.map((type: PokemonType) => {
    types = types + type.type.name + ", ";
  });

  return types.substring(0, types.length - 2);
};
