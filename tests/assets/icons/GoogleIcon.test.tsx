import React from "react";
import { render } from "@testing-library/react";
import { GoogleIcon } from "../../../src/assets/icons/GoogleIcon";

describe("tets on <GoogleIcon />", () => {
  test("should match snapshot", () => {
    const { container } = render(<GoogleIcon />);
    expect(container).toMatchSnapshot();
  });
});
