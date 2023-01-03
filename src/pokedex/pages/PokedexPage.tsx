import { Container, Row } from "react-bootstrap";
import { PokemonCard } from "../components";

export const PokedexPage = () => {
  const pokemons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container className="navbar-margin">
      <Row className='justify-content-around'>
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} index={index} />
        ))}
      </Row>
    </Container>
  );
};
