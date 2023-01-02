import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const registerUserWithEmailPassword = async (
  email: string,
  displayName: string,
  password: string
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid } = resp.user;

    return {
      ok: true,
      uid,
      email,
      displayName,
    };
  } catch (error: any) {
    console.log(error.code);
    return {
      ok: false,
      errorMessage: error.code,
    };
  }
};
