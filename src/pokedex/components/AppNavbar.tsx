import { MouseEventHandler, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonIcon, SearchIcon } from "../../assets/icons";
import { SearchForm } from "./SearchForm";

const NavbarContent = () => (
  <>
    <SearchForm className="d-md-none my-4" />
    <div className="d-flex justify-content-center">
      <Link
        to="/profile"
        className="d-md-none d-flex align-items-center h2 text-black text-decoration-none"
      >
        ACCOUNT <PersonIcon />
      </Link>
    </div>
  </>
);

const NavbarMdContent = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleClick = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);

  if (showForm) {
    return (
      <SearchForm
        className="animate__animated animate__fadeInRight d-none d-md-block"
        handleCancel={handleCancel}
        closeButton
      />
    );
  }

  return (
    <>
      <div
        className="nav-link cursor-pointer animate__animated animate__fadeIn d-none d-md-block"
        onClick={handleClick}
      >
        <SearchIcon />
      </div>
      <Link
        to="/profile"
        className="nav-link cursor-pointer animate__animated animate__fadeIn d-none d-md-block"
      >
        <PersonIcon size={40} />
      </Link>
    </>
  );
};

export const AppNavbar = () => (
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
        <NavbarContent />
        <NavbarMdContent />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
