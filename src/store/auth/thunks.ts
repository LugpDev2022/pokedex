import {
  logOutFirebase,
  registerUserWithEmailPassword,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
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

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingAuth());
    const resp = await signInWithGoogle();

    if (!resp.ok) return dispatch(logout(resp.errorMessage));
    console.log(resp);
    dispatch(login({ ...resp, visitedUrl: "/" }));
  };
};

export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingAuth());
    const resp = await signInWithEmailPassword(email, password);

    if (!resp.ok) return dispatch(logout(resp.errorMessage));
    dispatch(login({ ...resp, visitedUrl: "/" }));
  };
};

export const startLogOut = () => {
  return async (dispatch: AppDispatch) => {
    await logOutFirebase();
    dispatch(logout(null));
  };
};
