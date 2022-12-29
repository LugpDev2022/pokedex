import { Navigate, Route, Routes } from "react-router-dom";
import { PokedexPage, SearchPage, PokemonPage } from "../pages";

export const PokedexRoutes = () => (
  <Routes>
    <Route path="/" element={<PokedexPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/pokemon:id" element={<PokemonPage />} />

    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);
