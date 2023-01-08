import { getPokemonsByPage } from "../../../src/pokedex/helpers/getPokemonsByPage";

describe("tests on getPokemonsByPage", () => {
  test("the request should fail and return an error", async () => {
    const { ok, pokemons, errorMessage } = await getPokemonsByPage(1000);

    expect(ok).toBe(false);
    expect(pokemons).toEqual([]);
    expect(errorMessage).toEqual(expect.any(String));
    expect(errorMessage.length).toBeGreaterThan(1);
  });

  test("should return correctly the response", async () => {
    const { ok, pokemons, errorMessage } = await getPokemonsByPage(10);

    expect(ok).toBe(true);
    expect(errorMessage).toBeFalsy();

    // test the implicit ofset
    expect(pokemons.length).toBe(8);
    expect(pokemons[0].id).toBe(73);
    expect(pokemons[7].id).toBe(80);
  });

  test("should have an ofset of 10", async () => {
    const { pokemons } = await getPokemonsByPage(10, 10);

    expect(pokemons.length).toBe(10);
    expect(pokemons[0].id).toBe(91);
    expect(pokemons[9].id).toBe(100);
  });
});
