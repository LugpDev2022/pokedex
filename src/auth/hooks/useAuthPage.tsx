import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { resetError } from "../../store/auth";

export const useAuthPage = () => {
  const dispatch = useAppDispatch();
  const [shownError, setShownError] = useState<string>();
  const { errorMessage, status } = useAppSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(resetError());
  }, []);

  useEffect(() => {
    if (!errorMessage) return setShownError("");
    setShownError(getErrorMessage(errorMessage));
  }, [errorMessage]);

  return {
    shownError,
    status,
  };
};
