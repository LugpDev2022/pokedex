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

    return {
      ok: true,
      uid: resp.user.uid,
      email,
      displayName,
    };
  } catch (error: any) {
    return {
      ok: false,
      errorMessage: error.code,
    };
  }
};
