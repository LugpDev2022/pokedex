import { MouseEventHandler, useMemo } from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  actualPage: number;
  disableUi: boolean;
  handleNextPage: MouseEventHandler<HTMLElement>;
  handlePrevPage: MouseEventHandler<HTMLElement>;
  limit: number;
}

export const AppPagination = ({
  actualPage,
  disableUi,
  handleNextPage,
  handlePrevPage,
  limit,
}: Props) => {
  const disablePrev = actualPage === 1 || disableUi;
  const disableNext = actualPage === limit || disableUi;

  return (
    <Pagination size="lg" className="mt-5 justify-content-center">
      <Pagination.Prev
        data-testid="prevButton"
        disabled={disablePrev}
        onClick={disablePrev ? () => {} : handlePrevPage}
      />
      <Pagination.Item data-testid="pageNumber" disabled={disableUi} active>
        {actualPage}
      </Pagination.Item>
      <Pagination.Next
        data-testid="nextButton"
        disabled={disableNext}
        onClick={disableNext ? () => {} : handleNextPage}
      />
    </Pagination>
  );
};
