import React from "react";
import { render, screen } from "@testing-library/react";
import { GoogleIcon } from "../../../src/assets/icons/GoogleIcon";

describe("tets on <GoogleIcon />", () => {
  test("should match snapshot", () => {
    const { container } = render(<GoogleIcon />);
    expect(container).toMatchSnapshot();
  });

  test("should have the given size", () => {
    render(<GoogleIcon size={75} />);

    const svg = screen.getByTestId("svg");
    expect(svg.getAttribute("width")).toBe("75");
    expect(svg.getAttribute("height")).toBe("75");
  });

  test("should have the given size", () => {
    render(<GoogleIcon className="testing-class another-testing-class" />);

    const svg = screen.getByTestId("svg");
    expect(svg.classList.contains("testing-class")).toBeTruthy();
    expect(svg.classList.contains("another-testing-class")).toBeTruthy();
  });
});
