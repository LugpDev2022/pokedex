import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { FirebaseAuth } from "../firebase/config";
import { PokedexRoutes } from "../pokedex";
import { RootState } from "../store";
import { login, logout } from "../store/auth";

export const Router = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(null));

      const { uid, email, displayName } = user;
      dispatch(login({ uid, email, displayName }));
    });
  }, []);

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PokedexRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
