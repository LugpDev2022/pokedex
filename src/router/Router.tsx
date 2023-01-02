import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { PokedexRoutes } from "../pokedex";
import { RootState } from "../store";

export const Router = () => {
  const { status } = useSelector((state: RootState) => state.auth);

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
