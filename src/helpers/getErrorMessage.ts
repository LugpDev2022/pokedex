export const getErrorMessage = (error: string): string => {
  const errors = {
    usedEmail: "Email alredy in use",
  };

  switch (error) {
    case "auth/email-already-in-use":
      return errors.usedEmail;

    default:
      return "Unknown error. Try again later";
  }
};
