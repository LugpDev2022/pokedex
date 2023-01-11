import React from "react";
import { render, screen } from "@testing-library/react";
import { OutlinedStarIcon } from "../../../src/assets/icons/OutlinedStarIcon";

describe("tets on <OutlinedStarIcon />", () => {
  test("should match snapshot", () => {
    const { container } = render(<OutlinedStarIcon />);
    expect(container).toMatchSnapshot();
  });

  test("should have the given size", () => {
    render(<OutlinedStarIcon size={75} />);

    const svg = screen.getByTestId("svg");
    expect(svg.getAttribute("width")).toBe("75");
    expect(svg.getAttribute("height")).toBe("75");
  });

  test("should have the given size", () => {
    render(
      <OutlinedStarIcon className="testing-class another-testing-class" />
    );

    const svg = screen.getByTestId("svg");
    expect(svg.classList.contains("testing-class")).toBeTruthy();
    expect(svg.classList.contains("another-testing-class")).toBeTruthy();
  });
});
