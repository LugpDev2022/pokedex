import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { startChargingPokemons } from "../../store/pokemon";
import { ShowPokemonCards, AppPagination } from "../components";

export const PokedexPage = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isDataCharging, page } = useAppSelector(
    (state: RootState) => state.pokemon
  );

  //TODO: Fix change page re render bug
  useEffect(() => {
    dispatch(startChargingPokemons(page));
  }, [page]);

  return (
    <Container className="navbar-padding animate__animated animate__fadeIn">
      <ShowPokemonCards showCards={isDataCharging} pokemonsArray={pokemons} placeholdersNumber={8} />

      <AppPagination />
    </Container>
  );
};
