import { OutlinedStarIcon, StarIcon } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  startAddingFavouritePokemon,
  startDeletingFavouritePokemon,
} from "../../store/pokemon";

export const AddFavouritePokemonButton = () => {
  const dispatch = useAppDispatch();
  const {
    isDataCharging,
    isPokemonSaving,
    uniquePokemon,
  }: { isDataCharging: boolean; isPokemonSaving: boolean; uniquePokemon: any } =
    useAppSelector((state) => state.pokemon);

  const handleDelete = () => {
    dispatch(startDeletingFavouritePokemon());
  };

  const handleAdd = () => {
    dispatch(startAddingFavouritePokemon());
  };

  if (uniquePokemon.isFavourite)
    return (
      <span onClick={handleDelete}>
        <StarIcon size={30} disabled={isDataCharging || isPokemonSaving} />
      </span>
    );

  return (
    <span onClick={handleAdd}>
      <OutlinedStarIcon
        size={30}
        className={isDataCharging || isPokemonSaving ? "icon-disabled" : "star-icon"}
      />
    </span>
  );
};
