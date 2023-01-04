import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { chargePokemons, setChargingState } from "../../store/pokemon";
import { ShowPokemonCards, AppPagination } from "../components";
import { getPokemonsByPage } from "../helpers";

export const PokedexPage = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.pokemon);

  //TODO: Fix change page re render bug
  //TODO: Use a thunk instead
  useEffect(() => {
    const gettingPokemons = async () => {
      dispatch(setChargingState());
      const pokemonsArray = await getPokemonsByPage(page, 8);
      dispatch(chargePokemons(pokemonsArray));
    };

    gettingPokemons();
  }, [page]);

  return (
    <Container className="navbar-margin">
      <ShowPokemonCards />

      <AppPagination />
    </Container>
  );
};
