import React from "react";
import { render, screen } from "@testing-library/react";
import { PokemonCard } from "../../../src/pokedex/components/PokemonCard";
import { MemoryRouter } from "react-router-dom";
import { getPokemonType } from "../../../src/pokedex/helpers";

jest.mock("../../../src/pokedex/helpers");

describe("tests on <PokemonCard />", () => {
  const pokemon = {
    name: "chikorita",
    id: 152,
    types: ["grass"],
    sprite: "https://chikorita.com/",
    height: 9,
    weight: 64,
  };

  test("should show the pokemon data", () => {
    getPokemonType.mockReturnValue("TYPE: grass");

    render(
      <MemoryRouter>
        <PokemonCard {...pokemon} />
      </MemoryRouter>
    );

    const img = screen.getByRole("img");

    expect(screen.getByText(pokemon.name)).toBeTruthy();
    expect(screen.getByText("ID: " + pokemon.id)).toBeTruthy();
    expect(img.src).toBe(pokemon.sprite);
    expect(getPokemonType).toHaveBeenCalledWith(pokemon.types);
    expect(screen.getByText("TYPE: grass")).toBeTruthy();
    expect(screen.getByText("HEIGHT: " + pokemon.height)).toBeTruthy();
    expect(screen.getByText("WEIGHT: " + pokemon.weight)).toBeTruthy();
  });

  test("should have the correct link", () => {
    render(
      <MemoryRouter>
        <PokemonCard {...pokemon} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link.href).toBe("http://localhost/pokemon/" + pokemon.id);
  });

  test("should have the card margin", () => {
    const { container } = render(
      <MemoryRouter>
        <PokemonCard {...pokemon} />
      </MemoryRouter>
    );

    const [card] = container.getElementsByClassName("card");
    expect(card.className).toBe("mt-4 card");
  });

  test("should disable the card margin", () => {
    const { container } = render(
      <MemoryRouter>
        <PokemonCard {...pokemon} margin={false} />
      </MemoryRouter>
    );

    const [card] = container.getElementsByClassName("card");
    expect(card.className).toBe("card");
  });
});
