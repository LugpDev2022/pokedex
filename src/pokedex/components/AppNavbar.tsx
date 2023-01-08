import { MouseEventHandler, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonIcon, SearchIcon } from "../../assets/icons";
import { SearchForm } from "./SearchForm";

interface Props {
  handleSearchClick: MouseEventHandler;
  handleCancelForm: MouseEventHandler;
  showForm: boolean;
}

const NavbarContent = () => (
  <>
    <SearchForm className="d-md-none my-4" />
    <div className="text-center mb-2">
      <Link
        to="/profile"
        className="d-md-none h2 text-black text-decoration-none"
      >
        ACCOUNT <PersonIcon width={30} height={30} />
      </Link>
    </div>
  </>
);

const NavbarMdContent = ({
  handleSearchClick,
  handleCancelForm,
  showForm,
}: Props) => {
  if (showForm) {
    return (
      <SearchForm
        className="animate__animated animate__fadeInRight"
        handleCancel={handleCancelForm}
        closeButton
      />
    );
  }

  return (
    <>
      <div
        className="nav-link cursor-pointer animate__animated animate__fadeIn d-none d-md-block"
        onClick={handleSearchClick}
      >
        <SearchIcon width={30} height={30} />
      </div>
      <Link
        to="/profile"
        className="nav-link cursor-pointer animate__animated animate__fadeIn d-none d-md-block"
      >
        <PersonIcon width={40} height={40} />
      </Link>
    </>
  );
};

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
          <NavbarContent />
          <NavbarMdContent
            handleSearchClick={handleSearchClick}
            handleCancelForm={handleCancelForm}
            showForm={showForm}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
