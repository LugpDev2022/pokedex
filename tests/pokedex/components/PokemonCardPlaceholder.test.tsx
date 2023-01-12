import React from "react";
import { render } from "@testing-library/react";
import { PokemonCardPlaceholder } from "../../../src/ui/PokemonCardPlaceholder";

describe("tests on <PokemonCardPlaceholder />", () => {
  test("should match snapshot", () => {
    const { container } = render(<PokemonCardPlaceholder />);
    expect(container).toMatchSnapshot();
  });
});
