import { registerUserWithEmailPassword } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingAuth } from "./";

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
    //TODO: Login or logout depending of the resp
  };
};
