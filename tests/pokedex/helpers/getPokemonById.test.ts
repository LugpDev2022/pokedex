import expect from "expect";
import { getPokemonById } from "../../../src/pokedex/helpers/getPokemonById";

describe("tests on getPokemonById", () => {
  test("should return the correct values", async () => {
    const expectedPokemonData = {
      name: expect.any(String),
      id: expect.any(Number),
      types: expect.any(Array),
      weight: expect.any(Number),
      height: expect.any(Number),
      sprites: expect.any(Object),
    };
    const { ok, pokemonData, errorMessage } = await getPokemonById(152);

    expect(ok).toBe(true);
    expect(pokemonData).toEqual(expectedPokemonData);
    expect(errorMessage).toBeFalsy();
  });

  test("should return an error", async () => {
    const { ok, pokemonData, errorMessage } = await getPokemonById(10000);

    expect(ok).toBe(false);
    expect(pokemonData).toBeFalsy();
    expect(errorMessage).toBeTruthy();
  });
});
