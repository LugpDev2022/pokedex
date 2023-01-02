import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const registerUserWithEmailPassword = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    return {
      ok: true,
      uid: resp.user.uid,
      email,
      username,
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.code,
    };
  }
};

export const signInWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(FirebaseAuth, googleProvider);
    console.log(resp);

    return {
      ok: true,
      uid: resp.user.uid,
      email: resp.user.email,
      username: resp.user.displayName
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.code,
    };
  }
};
