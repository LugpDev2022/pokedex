import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

interface Props {
  pokemon: object;
  index: number;
}

type PokemonType = {
  type: any;
};

export const PokemonCard = ({ pokemon, index }: Props) => {
  const [pokemonTypes, setPokemonTypes] = useState<any[]>();
  const { id, types, name, sprites, base_experience, height, weight }: any =
    pokemon;

  useEffect(() => {
    const tipesList = types.map((type: PokemonType) => {
      return type.type.name;
    });

    setPokemonTypes(tipesList);
  }, []);

  return (
    <Col xs={12} sm={10} md={6} xl={5}>
      <Card className="flex-row mt-5">
        <Card.Img style={{ width: "50%" }} src={sprites.front_default} />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-uppercase">{name}</Card.Title>
          <Card.Subtitle className="mb-3 text-center">ID: {id}</Card.Subtitle>
          <Card.Text className="mb-1 text-center">
            Types: {pokemonTypes && pokemonTypes.map((type) => type + ", ")}
          </Card.Text>
          <Card.Text className="mb-1 text-center">
            Base experience: {base_experience}
          </Card.Text>
          <Card.Text className="mb-1 text-center">Height: {height}</Card.Text>
          <Card.Text className="mb-1 text-center">Weight: {weight}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
