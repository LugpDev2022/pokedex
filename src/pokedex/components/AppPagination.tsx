import { MouseEventHandler } from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  handleNextPage: MouseEventHandler<HTMLElement>;
  handlePrevPage: MouseEventHandler<HTMLElement>;
  actualPage: number;
  disableUi: boolean;
  limit: number;
}

export const AppPagination = ({
  handleNextPage,
  handlePrevPage,
  actualPage,
  disableUi,
  limit,
}: Props) => {
  return (
    <Pagination size="lg" className="mt-5 justify-content-center">
      <Pagination.Prev
        disabled={disableUi || actualPage === 1}
        onClick={handlePrevPage}
      />
      <Pagination.Item disabled={disableUi} active>
        {actualPage}
      </Pagination.Item>
      <Pagination.Next
        disabled={disableUi || actualPage === limit}
        onClick={handleNextPage}
      />
    </Pagination>
  );
};
