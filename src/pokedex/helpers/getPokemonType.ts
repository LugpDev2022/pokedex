//TODO: Add correct types

export const getPokemonType = (typesArray: any[]): string => {
  if (typesArray.length === 1) return `TYPE: ${typesArray[0].type.name}`;

  let types: string = "TYPES: ";

  typesArray.map((type: any) => {
    types = types + type.type.name + ", ";
  });

  return types.substring(0, types.length - 2);
};
