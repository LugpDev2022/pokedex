import { MouseEventHandler, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonIcon, SearchIcon } from "../../assets/icons";
import { SearchForm } from "./SearchForm";

interface Props {
  handleSearchClick: MouseEventHandler;
}

const NavbarMdContent = ({ handleSearchClick }: Props) => (
  <>
    <div
      className="nav-link cursor-pointer animate__animated animate__fadeIn d-none d-md-block"
      onClick={handleSearchClick}
    >
      <SearchIcon width={30} height={30} />
    </div>
    <SearchForm className="d-md-none" />
    <Link
      to="/profile"
      className="nav-link cursor-pointer animate__animated animate__fadeIn d-none d-md-block"
    >
      <PersonIcon width={40} height={40} />
    </Link>

    <Link to="/profile" className="d-md-none text-black text-decoration-none">
      Your account
    </Link>
  </>
);

export const AppNavbar = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleSearchClick = () => setShowForm(true);
  const handleCancelForm = () => setShowForm(false);

  return (
    <Navbar variant="light" expand="md" bg="primary" fixed="top">
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
          {showForm ? (
            <SearchForm handleCancel={handleCancelForm} closeButton />
          ) : (
            <NavbarMdContent handleSearchClick={handleSearchClick} />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
