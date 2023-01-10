import { OutlinedStarIcon } from "../../assets/icons";
import { useAppDispatch } from "../../store";
import { startAddingFavouritePokemon } from "../../store/pokemon";

export const AddFavouritePokemonButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(startAddingFavouritePokemon());
  };

  return (
    <span onClick={handleClick}>
      <OutlinedStarIcon width={30} height={30} />
    </span>
  );
};
