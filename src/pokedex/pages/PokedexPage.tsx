import { useEffect } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import { useAppDispatch } from "../../store";
import { chargePokemons, setChargingState } from "../../store/pokemon";
import { PokemonCard } from "../components";
import { getPokemonsByPage } from "../helpers";

export const PokedexPage = () => {
  const dispatch = useAppDispatch();
  const pokemons = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const gettingPokemons = async () => {
      dispatch(setChargingState());
      const pokemons = await getPokemonsByPage(3);
      dispatch(chargePokemons(pokemons));
    };

    gettingPokemons();
  }, []);

  return (
    <Container className="navbar-margin">
      <Row className="justify-content-around">
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} index={index} key={pokemon} />
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
