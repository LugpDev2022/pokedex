import { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Image,
  Placeholder,
  Row,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { startChargingUniquePokemon } from "../../store/pokemon";
import { getPokemonType } from "../helpers";
import white from "../../assets/images/white.jpg";
import {
  AddFavouritePokemonButton,
  AppPagination,
  ShareButton,
} from "../components";

export const PokemonPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    errorMessage,
    isDataCharging,
    uniquePokemon,
  }: {
    errorMessage: string;
    isDataCharging: boolean;
    uniquePokemon: any;
  } = useAppSelector((state: RootState) => state.pokemon);
  const [pokemonTypes, setPokemonTypes] = useState<string>("");

  useEffect(() => {
    const id = parseInt(pathname.slice(9));
    dispatch(startChargingUniquePokemon(id));
  }, [pathname]);

  useEffect(() => {
    uniquePokemon.types && setPokemonTypes(getPokemonType(uniquePokemon.types));
  }, [uniquePokemon]);

  const CardPlaceholder = () => (
    <Col xs={12} sm={6} className="d-flex flex-column justify-content-around">
      <Row className="text-center text-sm-start">
        <h2 className="mt-0 text-uppercase">
          <Placeholder xs={6} />
        </h2>
        <h3 className="h4 mt-0 mb-4">
          <Placeholder xs={3} />
        </h3>
        <span className="fs-4">
          <Placeholder xs={7} />
        </span>
        <span className="fs-4">
          <Placeholder xs={5} />
        </span>
        <span className="fs-4">
          <Placeholder xs={6} />
        </span>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center justify-content-sm-start">
          <ShareButton />
          <AddFavouritePokemonButton />
        </Col>
      </Row>
    </Col>
  );

  const PokemonCard = () => (
    <Col xs={12} sm={6} className="d-flex flex-column justify-content-around">
      <Row className="text-center text-sm-start">
        <h2 className="mt-0 text-uppercase">{uniquePokemon.name}</h2>
        <h3 className="h4 mt-0 mb-4">ID: {uniquePokemon.id}</h3>
        <span className="fs-4">{pokemonTypes}</span>
        <span className="fs-4">HEIGHT: {uniquePokemon.height}</span>
        <span className="fs-4">WEIGHT: {uniquePokemon.weight}</span>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center justify-content-sm-start">
          <ShareButton />
          <AddFavouritePokemonButton />
        </Col>
      </Row>
    </Col>
  );

  return (
    <Container className="h-100 navbar-padding animate__animated animate__fadeInLeft">
      <Row className="h-100 align-items-center justify-content-center">
        <Col xs={11} md={10} lg={8} xl={6}>
          {errorMessage ? (
            <Alert variant="danger" className="h5 fw-bold text-center">
              We don't know that pokemon
            </Alert>
          ) : (
            <>
              <div className="bg-white rounded-4 py-3 mt-4">
                <Row className="justify-content-center">
                  <Col xs={10} sm={6}>
                    <Image
                      className="w-100"
                      src={
                        isDataCharging
                          ? white
                          : uniquePokemon.sprites &&
                            uniquePokemon.sprites.front_default
                      }
                    />
                  </Col>
                  {isDataCharging ? <CardPlaceholder /> : <PokemonCard />}
                </Row>
              </div>
              <div>
                <AppPagination
                  actualPage={uniquePokemon.id}
                  handleNextPage={() =>
                    navigate(`/pokemon/${uniquePokemon.id + 1}`)
                  }
                  handlePrevPage={() =>
                    navigate(`/pokemon/${uniquePokemon.id - 1}`)
                  }
                  disableUi={isDataCharging}
                  limit={1008}
                />
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
