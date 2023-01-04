import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../store";
import { startLogOut } from "../../store/auth";
import { clearPokemons } from "../../store/pokemon";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(startLogOut());
    dispatch(clearPokemons())
  };

  return (
    <>
      <h1 className="navbar-margin">ProfilePage</h1>

      <Button variant="danger" onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};
