import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { nextPage, prevPage, startChargingPokemons } from "../../store/pokemon";
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
      <ShowPokemonCards
        placeholdersNumber={8}
        pokemonsArray={pokemons}
        showCards={isDataCharging}
      />

      <AppPagination
        actualPage={page}
        disableUi={isDataCharging}
        handleNextPage={() => dispatch(nextPage())}
        handlePrevPage={() => dispatch(prevPage())}
        limit={113}
      />
    </Container>
  );
};
