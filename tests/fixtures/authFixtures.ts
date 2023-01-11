export const userDemo = {
  email: "lugp@google.com",
  uid: "123ABC",
  username: "lugp",
};

export const initialState = {
  email: null,
  errorMessage: null,
  status: "checking",
  uid: null,
  username: null,
  visitedUrl: "",
};

export const notAuthenticatedState = {
  email: null,
  errorMessage: null,
  status: "not-authenticated",
  uid: null,
  username: null,
  visitedUrl: "",
};

export const authenticatedState = {
  email: userDemo.email,
  errorMessage: null,
  status: "authenticated",
  uid: userDemo.uid,
  username: userDemo.username,
  visitedUrl: "/profile",
};
