export const getErrorMessage = (error: string): string => {
  const errors = {
    usedEmail: "Email alredy in use",
    popupClosed: "Sign in cancelled by user",
  };

  switch (error) {
    case "auth/email-already-in-use":
      return errors.usedEmail;

    case "auth/popup-closed-by-user":
      return errors.popupClosed;

    default:
      return "Unknown error. Try again later";
  }
};
