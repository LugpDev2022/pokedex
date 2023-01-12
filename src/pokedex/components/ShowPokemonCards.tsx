import { Row } from "react-bootstrap";
import { RootState, useAppSelector } from "../../store";
import { PokemonCardPlaceholder } from "../../ui";
import { PokemonCard } from "../components";

const cardsNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

export const ShowPokemonCards = () => {
  const { pokemons, isDataCharging } = useAppSelector(
    (state: RootState) => state.pokemon
  );

  if (isDataCharging) {
    return (
      <Row className="justify-content-around">
        {cardsNumber.map((number) => (
          <PokemonCardPlaceholder key={number} />
        ))}
      </Row>
    );
  }

  return (
    <Row className="justify-content-around">
      {pokemons.map((pokemon: any) => (
        <PokemonCard
          {...pokemon}
          sprite={pokemon.sprites.front_default}
          key={pokemon.id}
        />
      ))}
    </Row>
  );
};
