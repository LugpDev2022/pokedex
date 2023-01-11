import React from "react";
import { render, screen } from "@testing-library/react";
import { PersonIcon } from "../../../src/assets/icons/PersonIcon";

describe("tests on <PersonIcon />", () => {
  test("should match snapshot", () => {
    const { container } = render(<PersonIcon />);
    expect(container).toMatchSnapshot();
  });

  test("should have the given size", () => {
    render(<PersonIcon size={75} />);

    const svg = screen.getByTestId("svg");
    expect(svg.getAttribute("width")).toBe("75");
    expect(svg.getAttribute("height")).toBe("75");
  });

  test("should have the given size", () => {
    render(<PersonIcon className="testing-class another-testing-class" />);

    const svg = screen.getByTestId("svg");
    expect(svg.classList.contains("testing-class")).toBeTruthy();
    expect(svg.classList.contains("another-testing-class")).toBeTruthy();
  });
});
