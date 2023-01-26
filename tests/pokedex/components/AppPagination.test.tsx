import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AppPagination } from "../../../src/pokedex/components/AppPagination";

describe("tests on <AppPagination />", () => {
  beforeEach(() => jest.clearAllMocks());

  const handleNextPage = jest.fn();
  const handlePrevPage = jest.fn();

  const testProps = {
    handleNextPage,
    handlePrevPage,
    actualPage: 2,
    disableUi: false,
    limit: 4,
  };

  test("should show the page number", () => {
    render(<AppPagination {...testProps} />);
    expect(screen.getByText("2")).toBeTruthy();
  });

  test("should call the given change functions", () => {
    render(<AppPagination {...testProps} />);

    const nextButton = screen.getByTestId("nextButton");
    const prevButton = screen.getByTestId("prevButton");

    fireEvent.click(nextButton);
    expect(handleNextPage).toHaveBeenCalled();

    fireEvent.click(prevButton);
    expect(handlePrevPage).toHaveBeenCalled();
  });

  test("should disable the buttons", () => {
    render(<AppPagination {...testProps} disableUi />);

    const nextButton = screen.getByTestId("nextButton");
    const prevButton = screen.getByTestId("prevButton");

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(handleNextPage).not.toHaveBeenCalled();
    expect(handlePrevPage).not.toHaveBeenCalled();
  });

  test("should disable the next button on given limit", () => {
    render(<AppPagination {...testProps} actualPage={4} />);

    const nextButton = screen.getByTestId("nextButton");

    fireEvent.click(nextButton);
    expect(handleNextPage).not.toHaveBeenCalled();
  });
});
