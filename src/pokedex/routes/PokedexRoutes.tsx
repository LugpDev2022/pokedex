import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../store";
import { AppNavbar } from "../components";
import { PokedexPage, SearchPage, PokemonPage, ProfilePage } from "../pages";

export const PokedexRoutes = () => {
  const { visitedUrl } = useAppSelector((state) => state.auth);

  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {visitedUrl !== "/auth/login" && visitedUrl !== "/auth/register" ? (
          <Route path="/*" element={<Navigate to={visitedUrl} />} />
        ) : (
          <Route path="/*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
};
