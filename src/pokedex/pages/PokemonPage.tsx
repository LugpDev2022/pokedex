import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Modal,
  Row,
  Image,
  Placeholder,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { startChargingUniquePokemon } from "../../store/pokemon";
import { getPokemonType } from "../helpers";
import { OutlinedStarIcon } from "../../assets/icons";
import white from "../../assets/images/white.jpg";
import { ShareButton } from "../components";

export const PokemonPage = () => {
  //TODO:Disable icons when charging data
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  //TODO: Set the correct type
  const {
    uniquePokemon,
    isDataCharging,
  }: { uniquePokemon: any; isDataCharging: boolean } = useAppSelector(
    (state: RootState) => state.pokemon
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
        className="my-modal animate__animated animate__fadeInLeft"
        centered
      >
        <Container>
          <Row className="justify-content-center">
            <Image
              className="col-10 col-sm-6"
              fluid
              src={
                isDataCharging
                  ? white
                  : uniquePokemon.sprites && uniquePokemon.sprites.front_default
              }
            />

            <Col className="d-flex flex-column justify-content-around">
              <Row>
                <h2 className="mt-0 text-center text-sm-start text-uppercase">
                  {isDataCharging ? <Placeholder xs={6} /> : uniquePokemon.name}
                </h2>
                <h3 className="h4 text-center text-sm-start mt-0 mb-4">
                  {isDataCharging ? (
                    <Placeholder xs={3} />
                  ) : (
                    `ID: ${uniquePokemon.id}`
                  )}
                </h3>
                <span className="fs-4 text-center text-sm-start">
                  {isDataCharging ? <Placeholder xs={7} /> : pokemonTypes}
                </span>
                <span className="fs-4 text-center text-sm-start">
                  {isDataCharging ? (
                    <Placeholder xs={4} />
                  ) : (
                    `HEIGHT: ${uniquePokemon.height}`
                  )}
                </span>
                <span className="fs-4 text-center text-sm-start">
                  {isDataCharging ? (
                    <Placeholder xs={4} />
                  ) : (
                    `WEIGHT: ${uniquePokemon.weight}`
                  )}
                </span>
              </Row>
              <Row className="mt-5 mt-sm-4 mt-lg-0">
                <Col className="d-flex justify-content-center justify-content-sm-start">
                  <ShareButton />
                  <OutlinedStarIcon width={30} height={30} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};
