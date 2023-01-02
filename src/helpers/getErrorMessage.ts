export const getErrorMessage = (error: string): string => {
  const errors = {
    usedEmail: "Email alredy in use",
    popupClosed: "Sign in cancelled by user",
    emailNotFound: "Account not found",
    wrongPassword: "Wrong password. Try again",
  };

  switch (error) {
    case "auth/email-already-in-use":
      return errors.usedEmail;

    case "auth/popup-closed-by-user":
      return errors.popupClosed;

    case "auth/user-not-found":
      return errors.emailNotFound;

    case "auth/wrong-password":
      return errors.wrongPassword;

    default:
      return "Unknown error. Try again later";
  }
};
