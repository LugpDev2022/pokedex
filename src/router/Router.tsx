import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { PokedexRoutes } from "../pokedex";

export const Router = () => {
  const status = "not-authenticated";

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
