import { getErrorMessage } from "../../src/helpers/getErrorMessage";

describe("tests on getErrorMessage", () => {
  test("should return the correct error message", () => {
    const errorMessages: string[] = [];
    const errors = [
      "auth/email-already-in-use",
      "auth/popup-closed-by-user",
      "auth/user-not-found",
      "auth/wrong-password",
      "invented error",
    ];

    errors.forEach((error: any) => {
      errorMessages.push(getErrorMessage(error));
    });

    expect(errorMessages).toEqual([
      "Email alredy in use",
      "Sign in cancelled by user",
      "Account not found",
      "Wrong password. Try again",
      "Unknown error. Try again later",
    ]);
  });
});
