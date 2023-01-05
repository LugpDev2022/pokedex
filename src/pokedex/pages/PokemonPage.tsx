import { useEffect, useState } from "react";
import { Col, Container, Modal, Row, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { startChargingUniquePokemon } from "../../store/pokemon";
import { getPokemonType } from "../helpers";

export const PokemonPage = () => {
  //TODO: Add a share button
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  //TODO: Set the correct type
  const { uniquePokemon }: { uniquePokemon: any } = useAppSelector(
    (state) => state.pokemon
  );
  const [pokemonTypes, setPokemonTypes] = useState<string>("");

  useEffect(() => {
    const id = parseInt(pathname.slice(9));
    dispatch(startChargingUniquePokemon(id));
  }, [pathname]);

  useEffect(() => {
    uniquePokemon.types && setPokemonTypes(getPokemonType(uniquePokemon.types));
  }, [uniquePokemon]);

  return (
    <div className="navbar-margin">
      <Modal
        show
        animation={false}
        backdrop={false}
        size="lg"
        className="my-modal"
        centered
      >
        <Container>
          <Row>
            <Image
              className="col-6"
              fluid
              src={uniquePokemon.sprites && uniquePokemon.sprites.front_default}
            />

            <Col className="d-flex flex-column justify-content-around">
              <Row>
                <h2 className="mt-0 text-uppercase">{uniquePokemon.name}</h2>
                <h3 className="h4 mt-0">ID: {uniquePokemon.id}</h3>
                <span className="fs-4">{pokemonTypes}</span>
                <span>HEIGHT: {uniquePokemon.height}</span>
                <span>WEIGHT: {uniquePokemon.weight}</span>
              </Row>
              <Row>
                <span>Add to favorites</span>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};
