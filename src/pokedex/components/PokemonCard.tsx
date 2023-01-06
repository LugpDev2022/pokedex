import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPokemonType } from "../helpers";

interface Props {
  name: string;
  id: number;
  types: any;
  sprite: string;
  height: number;
  weight: number;
}

export const PokemonCard = ({
  name,
  id,
  types,
  sprite,
  height,
  weight,
}: Props) => {
  const [pokemonTypes, setPokemonTypes] = useState<string>("");

  useEffect(() => {
    setPokemonTypes(getPokemonType(types));
  }, []);

  return (
    <Col xs={11} sm={9} md={6} lg={3}>
      <Link
        to={`/pokemon/${id}`}
        className="text-decoration-none text-reset card-as-link animate__animated animate__fadeIn"
      >
        <Card className="mt-5">
          <Card.Header>
            <Row>
              <span className="text-uppercase mb-0 fw-bold fs-4">{name}</span>
            </Row>
            <span className="fs-5">ID: {id}</span>
          </Card.Header>
          <div className="img-custom-container">
            <Card.Img src={sprite} />
          </div>
          <ListGroup variant="flush">
            <ListGroup.Item className="fs-5">{pokemonTypes}</ListGroup.Item>
            <ListGroup.Item className="fs-5">HEIGHT: {height}</ListGroup.Item>
            <ListGroup.Item className="fs-5">WEIGHT: {weight}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
};
