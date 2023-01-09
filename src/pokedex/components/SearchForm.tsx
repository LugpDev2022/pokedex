import { useFormik } from "formik";
import { MouseEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SearchIcon, CloseIcon } from "../../assets/icons";
import { includesLetters } from "../../helpers";

interface Props {
  handleCancel?: MouseEventHandler;
  closeButton?: boolean;
  className?: string;
}

interface Errors {
  searchedPokemon?: string;
}

export const SearchForm = ({
  handleCancel,
  closeButton = false,
  className,
}: Props) => {
  const navigate = useNavigate();

  const validate = (searchedPokemon: string) => {
    const errors: Errors = {};

    if (searchedPokemon.length < 1) errors.searchedPokemon = "Write an ID";
    else if (includesLetters(searchedPokemon))
      errors.searchedPokemon = "Introduce a pokemon ID";
    else if (searchedPokemon.trim().includes(" "))
      errors.searchedPokemon = "Delete the white spaces";

    return errors;
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { searchedPokemon: "" },
    onSubmit: ({ searchedPokemon }) => {
      const errors = validate(searchedPokemon);
      //TODO: Add a better alert
      if (errors.searchedPokemon) return alert(errors.searchedPokemon);

      navigate(`/pokemon/${searchedPokemon}`);
    },
  });

  return (
    <Form className={className ? className : ""} onSubmit={handleSubmit}>
      <InputGroup>
        {closeButton && (
          <Button className="btn-custom" onClick={handleCancel}>
            <CloseIcon width={25} height={25} />
          </Button>
        )}
        <Form.Control
          size="sm"
          type="text"
          className="form-custom"
          placeholder="Search a pokemon"
          onChange={handleChange}
          id="searchedPokemon"
          value={values.searchedPokemon}
        />
        <Button type="submit" variant="info" className="btn-custom">
          <SearchIcon width={25} height={25} />
        </Button>
      </InputGroup>
    </Form>
  );
};
