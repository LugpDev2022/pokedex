import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthModal } from "../../../src/auth/components/AuthModal";

describe("tests on <AuthModal />", () => {
  test("should render the children correctly", () => {
    const text = "Hello World!!";
    render(
      <AuthModal>
        <h1>{text}</h1>
      </AuthModal>
    );

    const screenText = screen.getByText(text);
    expect(screenText).toBeTruthy();
  });
});
