import { Row } from "react-bootstrap";
import { Pokemon } from "../../types/Pokemon";
import { PokemonCardPlaceholder } from "../../ui";
import { PokemonCard } from "../components";

interface Props {
  pokemonsArray: Pokemon[];
  showCards: boolean;
  placeholdersNumber: number;
}

export const ShowPokemonCards = ({
  showCards,
  pokemonsArray,
  placeholdersNumber,
}: Props) => {
  console.log();

  if (showCards) {
    const cardsNumber: number[] = Array.from(Array(placeholdersNumber).keys());

    return (
      <Row className="justify-content-around">
        {cardsNumber.map((number) => (
          <PokemonCardPlaceholder key={number} />
        ))}
      </Row>
    );
  }

  return (
    <Row className="justify-content-around animate__animated animate__fadeIn">
      {pokemonsArray.map((pokemon: any) => (
        <PokemonCard
          {...pokemon}
          sprite={pokemon.sprites.front_default}
          key={pokemon.id}
        />
      ))}
    </Row>
  );
};
