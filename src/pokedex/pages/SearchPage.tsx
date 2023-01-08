import { Col, Container, Row } from "react-bootstrap";
import { PokemonCard, SearchForm } from "../components";

export const SearchPage = () => {
  const pokemonTestInfo = {
    types: [{ type: { name: "grass" } }],
    name: "chikorita",
    id: 152,
    height: 10,
    weight: 52,
  };

  return (
    <Container className="navbar-padding h-100">
      <Row className="h-100 justify-content-center align-items-center">
        <PokemonCard
          margin={false}
          {...pokemonTestInfo}
          sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
        />
        <Col xs={6}>
          <h2>Search a Pokémon</h2>
          <SearchForm />
        </Col>
      </Row>
    </Container>
  );
};
