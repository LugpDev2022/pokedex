import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchIcon } from "../../../src/assets/icons/SearchIcon";

describe("tests on <SearchIcon />", () => {
  test("should match snapshot", () => {
    const { container } = render(<SearchIcon />);
    expect(container).toMatchSnapshot();
  });

  test("should have the given size", () => {
    render(<SearchIcon size={75} />);

    const svg = screen.getByTestId("svg");
    expect(svg.getAttribute("width")).toBe("75");
    expect(svg.getAttribute("height")).toBe("75");
  });

  test("should have the given size", () => {
    render(<SearchIcon className="testing-class another-testing-class" />);

    const svg = screen.getByTestId("svg");
    expect(svg.classList.contains("testing-class")).toBeTruthy();
    expect(svg.classList.contains("another-testing-class")).toBeTruthy();
  });
});
