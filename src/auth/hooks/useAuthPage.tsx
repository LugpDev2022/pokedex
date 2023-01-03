import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { getErrorMessage } from "../../helpers";
import { logout } from "../../store/auth";

export const useAuthPage = () => {
  const dispatch = useAppDispatch();
  const { errorMessage, status } = useAppSelector(
    (state: RootState) => state.auth
  );
  const [shownError, setShownError] = useState<string>();
  const [disableUI, setDisableUI] = useState<boolean>(false);

  //TODO: Fix logout before login bug when auto login
  useEffect(() => {
    dispatch(logout(null));
  }, []);

  useEffect(() => {
    if (status === "checking") return setDisableUI(true);
    setDisableUI(false);
  }, [status]);

  useEffect(() => {
    if (!errorMessage) return setShownError("");
    setShownError(getErrorMessage(errorMessage));
  }, [errorMessage]);

  return {
    shownError,
    disableUI,
  };
};
