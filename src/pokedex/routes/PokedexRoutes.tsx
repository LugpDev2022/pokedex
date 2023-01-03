import { Navigate, Route, Routes } from "react-router-dom";
import { AppNavbar } from "../components/AppNavbar";
import { PokedexPage, SearchPage, PokemonPage, ProfilePage } from "../pages";

export const PokedexRoutes = () => (
  <>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<PokedexPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </>
);
