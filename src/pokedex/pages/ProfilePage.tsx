import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { startLogOut } from "../../store/auth";
import { startGettingFavouritePokemons } from "../../store/pokemon";
import { PokemonCard } from "../components";

type Pokemon = {
  id: number;
  name: string;
  types: object[];
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
};

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { favouritePokemons } = useAppSelector((state) => state.pokemon);
  const { username, email } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogOut());
  };

  useEffect(() => {
    dispatch(startGettingFavouritePokemons());
  }, []);

  return (
    <Container className="navbar-padding">
      <Row className="mt-4">
        <Col xs={12}>
          <Row className="justify-content-center">
            <h2 className="text-center">Favourite Pokemons</h2>
            {favouritePokemons.map((pokemon: Pokemon) => (
              <PokemonCard
                {...pokemon}
                key={pokemon.id}
                sprite={pokemon.sprites.front_default}
              />
            ))}
          </Row>
        </Col>
        <Col xs={12} className="mt-4">
          <h3>{username}</h3>
          <h3>{email}</h3>

          <Button variant="danger" onClick={handleLogout}>
            Log out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
