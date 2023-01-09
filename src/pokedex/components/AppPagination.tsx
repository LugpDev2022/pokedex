import { Pagination } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { changePage, setChargingState } from "../../store/pokemon";

export const AppPagination = () => {
  const dispatch = useAppDispatch();
  const { page, isDataCharging, errorMessage } = useAppSelector(
    (state) => state.pokemon
  );

  const handleClick = (page: number) => {
    dispatch(setChargingState());
    dispatch(changePage(page));
  };

  return (
    <Pagination size="lg" className="mt-5 justify-content-center">
      <Pagination.Prev
        disabled={isDataCharging || page === 1}
        onClick={() => handleClick(page - 1)}
      />
      <Pagination.Item disabled={isDataCharging} active>
        {page}
      </Pagination.Item>
      <Pagination.Next
        disabled={isDataCharging || errorMessage === "Unexpected error"}
        onClick={() => handleClick(page + 1)}
      />
    </Pagination>
  );
};
