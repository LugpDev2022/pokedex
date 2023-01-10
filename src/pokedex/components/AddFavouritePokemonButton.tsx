import { OutlinedStarIcon } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store";
import { startAddingFavouritePokemon } from "../../store/pokemon";

export const AddFavouritePokemonButton = () => {
  const dispatch = useAppDispatch();
  const { isDataCharging, isPokemonSaving } = useAppSelector(
    (state) => state.pokemon
  );

  const handleClick = () => {
    dispatch(startAddingFavouritePokemon());
  };

  return (
    <span onClick={handleClick}>
      <OutlinedStarIcon
        width={30}
        height={30}
        disabled={isDataCharging || isPokemonSaving}
      />
    </span>
  );
};
