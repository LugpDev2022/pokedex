import { Pagination } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { changePage, setChargingState } from "../../store/pokemon";

export const AppPagination = () => {
  const dispatch = useAppDispatch();
  const { page, isDataCharging } = useAppSelector((state) => state.pokemon);

  const handleClick = (page: number) => {
    dispatch(setChargingState());
    dispatch(changePage(page));
  };

  if (page === 1) {
    return (
      <Pagination size="lg" className="mt-5 justify-content-center">
        <Pagination.Prev disabled />
        <Pagination.Item disabled={isDataCharging} active>
          1
        </Pagination.Item>
        <Pagination.Next
          disabled={isDataCharging}
          onClick={() => handleClick(page + 1)}
        />
      </Pagination>
    );
  }

  return (
    <Pagination size="lg" className="mt-5 justify-content-center">
      <Pagination.Prev
        disabled={isDataCharging}
        onClick={() => handleClick(page - 1)}
      />
      <Pagination.Item disabled={isDataCharging} active>
        {page}
      </Pagination.Item>
      <Pagination.Next
        disabled={isDataCharging}
        onClick={() => handleClick(page + 1)}
      />
    </Pagination>
  );
};
