import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonIcon, SearchIcon } from "../../assets/icons";
import { SearchForm } from "./SearchForm";

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
            <SearchForm handleCancel={handleCancelForm} />
          ) : (
            <>
              <div
                className="nav-link cursor-pointer"
                onClick={handleSearchClick}
              >
                <SearchIcon width={30} height={30} />
              </div>
              <Link to="/profile" className="nav-link">
                <PersonIcon width={40} height={40} />
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
