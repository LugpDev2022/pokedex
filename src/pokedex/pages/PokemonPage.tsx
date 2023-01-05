import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { startChargingUniquePokemon } from "../../store/pokemon";

export const PokemonPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { uniquePokemon } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    const id = parseInt(pathname.slice(9));
    dispatch(startChargingUniquePokemon(id));
  }, [pathname]);

  return (
    <Container className="navbar-margin">
      <Row>
        <Col>
          <h1>{uniquePokemon.name}</h1>
        </Col>
      </Row>
    </Container>
  );
};
