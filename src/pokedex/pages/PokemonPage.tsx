import { useEffect, useState } from "react";
import { Col, Container, Modal, Row, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { OutlinedStarIcon } from "../../assets/icons";
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
    <div>
      <Modal
        show
        animation={false}
        backdrop={false}
        size="lg"
        className="my-modal"
        centered
      >
        <Container>
          <Row className="justify-content-center">
            <Image
              className="col-9 col-sm-6"
              fluid
              src={uniquePokemon.sprites && uniquePokemon.sprites.front_default}
            />

            <Col className="d-flex flex-column justify-content-around">
              <Row>
                <h2 className="mt-0 text-center text-sm-start text-uppercase">
                  {uniquePokemon.name}
                </h2>
                <h3 className="h4 text-center text-sm-start mt-0 mb-4">
                  ID: {uniquePokemon.id}
                </h3>
                <span className="fs-4 text-center text-sm-start">
                  {pokemonTypes}
                </span>
                <span className="fs-4 text-center text-sm-start">
                  HEIGHT: {uniquePokemon.height}
                </span>
                <span className="fs-4 text-center text-sm-start">
                  WEIGHT: {uniquePokemon.weight}
                </span>
              </Row>
              <Row className="mt-5 mt-sm-4 mt-lg-0">
                <Col className="d-flex gap-5 justify-content-center justify-content-sm-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                  </svg>
                  <OutlinedStarIcon width={25} height={25} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};
