import {
  authSlice,
  checkingAuth,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  initialState,
  notAuthenticatedState,
  userDemo,
} from "../../fixtures/authFixtures";

describe("tests on authSlice", () => {
  test("slice name should be auth", () => {
    expect(authSlice.name).toBe("auth");
  });

  test("should return the initial state", () => {
    const state = authSlice.reducer(initialState, {});
    expect(state).toBe(initialState);
  });

  test("should set checking state", () => {
    const state = authSlice.reducer(notAuthenticatedState, checkingAuth());
    expect(state.status).toBe("checking");
  });

  test("should set logged state", () => {
    const visitedUrl = "/profile";
    const state = authSlice.reducer(
      notAuthenticatedState,
      login({ ...userDemo, visitedUrl })
    );
    expect(state).toEqual(authenticatedState);
  });

  test("should logout correctly", () => {
    const state = authSlice.reducer(authenticatedState, logout(null));
    expect(state).toEqual(notAuthenticatedState);
  });
});
