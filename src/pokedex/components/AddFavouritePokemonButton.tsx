import { OutlinedStarIcon, StarIcon } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store";
import { startAddingFavouritePokemon } from "../../store/pokemon";

export const AddFavouritePokemonButton = () => {
  const dispatch = useAppDispatch();
  const {
    isDataCharging,
    isPokemonSaving,
    uniquePokemon,
  }: { isDataCharging: boolean; isPokemonSaving: boolean; uniquePokemon: any } =
    useAppSelector((state) => state.pokemon);

  const handleClick = () => {
    dispatch(startAddingFavouritePokemon());
  };

  if (uniquePokemon.isFavourite)
    return (
      <span>
        <StarIcon size={30} disabled={isDataCharging || isPokemonSaving} />
      </span>
    );

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
