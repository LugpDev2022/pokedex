import { getPokemonType } from "../../../src/pokedex/helpers/getPokemonType";

describe("tests on getPokemonType", () => {
  test("should send an error if the array is emtpy", () => {
    expect(() => getPokemonType([])).toThrowError("The array is empty");
  });

  test("should send an error if the array is emtpy", () => {
    expect(() => getPokemonType()).toThrowError('"typesArray" not defined');
  });

  test("should return just one type", () => {
    const typesArray = [{ type: { name: "fire" } }];

    const types = getPokemonType(typesArray);
    expect(types).toBe("TYPE: fire");
  });

  test("should return the correct types", () => {
    const typesArray = [
      { type: { name: "fire" } },
      { type: { name: "grass" } },
    ];

    const types = getPokemonType(typesArray);
    expect(types).toBe("TYPES: fire, grass");
  });
});
