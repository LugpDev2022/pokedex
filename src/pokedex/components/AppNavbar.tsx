import { Image, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../assets/icons/SearchIcon";

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
            <SearchIcon width="30px" height="30px" />
          </Link>
          <Link to="/profile" className="nav-link">
            <Image
              roundedCircle
              src="https://avatars.githubusercontent.com/u/97978467?s=400&v=4"
              style={{ height: "35px", width: "35px" }}
            />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
