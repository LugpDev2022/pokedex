import { useEffect } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { chargePokemons, setChargingState } from "../../store/pokemon";
import { PokemonCard } from "../components";
import { getPokemonsByPage } from "../helpers";

export const PokedexPage = () => {
  const dispatch = useAppDispatch();
  const { pokemons, page } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    const gettingPokemons = async () => {
      dispatch(setChargingState());
      const pokemons = await getPokemonsByPage(page, 8);
      dispatch(chargePokemons(pokemons));
    };

    gettingPokemons();
  }, []);

  return (
    <Container className="navbar-margin">
      <Row className="justify-content-around">
        {pokemons.map((pokemon: any) => (
          <PokemonCard
            {...pokemon}
            sprite={pokemon.sprites.front_default}
            key={pokemon.id}
          />
        ))}
      </Row>
      <Pagination size="lg" className="mt-5 justify-content-center">
        <Pagination.Prev />
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
};
