import { Container, Pagination, Row } from "react-bootstrap";
import { PokemonCard } from "../components";

export const PokedexPage = () => {
  const pokemons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container className="navbar-margin">
      <Row className="justify-content-around">
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} index={index} />
        ))}
      </Row>
      <Pagination size="lg" className="mt-5 justify-content-center">
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item active>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
};
