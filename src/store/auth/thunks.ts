import { registerUserWithEmailPassword } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingAuth, login, logout } from "./";

interface CreatingUserWithEmailPasswordParams {
  email: string;
  username: string;
  password: string;
}

export const startCreatingUserWithEmailPassword = ({
  email,
  username,
  password,
}: CreatingUserWithEmailPasswordParams) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingAuth());

    const resp = await registerUserWithEmailPassword(email, username, password);

    if (!resp.ok) return dispatch(logout(resp.errorMessage));
    dispatch(login(resp));
  };
};
