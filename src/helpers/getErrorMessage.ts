type ErrorCode =
  | "auth/email-already-in-use"
  | "auth/popup-closed-by-user"
  | "auth/user-not-found"
  | "auth/wrong-password";

const errorMessages: Record<ErrorCode, string> = {
  "auth/email-already-in-use": "Email alredy in use",
  "auth/popup-closed-by-user": "Sign in cancelled by user",
  "auth/user-not-found": "Account not found",
  "auth/wrong-password": "Wrong password. Try again",
};

export const getErrorMessage = (error: ErrorCode): string => {
  return errorMessages[error] || "Unknown error. Try again later";
};
