import { Card, Col } from "react-bootstrap";

interface Props {
  pokemon: number;
  index: number;
}

export const PokemonCard = ({ pokemon, index }: Props) => {
  return (
    <Col xs={12} sm={10} md={6} xl={5}>
      <Card className="flex-row mt-5">
        <Card.Img
          style={{ width: "50%" }}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
        />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title>Chikorita</Card.Title>
          <Card.Subtitle className="mb-3 text-center">ID: 123</Card.Subtitle>
          <Card.Text className="mb-1 text-center">Types: normal</Card.Text>
          <Card.Text className="mb-1 text-center">Base experience: 105</Card.Text>
          <Card.Text className="mb-1 text-center">Height: 15</Card.Text>
          <Card.Text className="mb-1 text-center">Weight: 15</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
