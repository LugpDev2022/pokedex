import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { startChargingPokemons } from "../../store/pokemon";
import { ShowPokemonCards, AppPagination } from "../components";

export const PokedexPage = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.pokemon);

  //TODO: Fix change page re render bug
  useEffect(() => {
    dispatch(startChargingPokemons(page));
  }, [page]);

  return (
    <Container className="navbar-margin animate__animated animate__fadeIn">
      <ShowPokemonCards />

      <AppPagination />
    </Container>
  );
};
