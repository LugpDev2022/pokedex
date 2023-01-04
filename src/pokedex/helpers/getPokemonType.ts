export const getPokemonType = (typesArray: string[]): string => {
  if (typesArray.length === 1) return `TYPE: ${typesArray[0].type.name}`;

  let types: string = "TYPES: ";

  //TODO: Add correct type
  typesArray.map((type: any) => {
    types = types + type.type.name + ", ";
  });

  return types.substring(0, types.length - 2);
};
