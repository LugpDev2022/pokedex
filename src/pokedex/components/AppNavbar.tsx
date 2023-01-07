import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonIcon, SearchIcon } from "../../assets/icons";

export const AppNavbar = () => {
  //TODO: Show correctly the user image

  return (
    <Navbar variant="light" bg="primary" fixed="top">
      <Container>
        <Link
          to="/"
          className="navbar-brand pokemon-font"
          style={{ fontSize: "30px", letterSpacing: "2px" }}
        >
          Pokedex
        </Link>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end gap-4">
          <Link to="/search" className="nav-link">
            <SearchIcon width={30} height={30} />
          </Link>
          <Link to="/profile" className="nav-link">
            <PersonIcon width={40} height={40} />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
