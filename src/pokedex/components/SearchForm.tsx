import { MouseEventHandler } from "react";
import { useFormik } from "formik";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SearchIcon, CloseIcon } from "../../assets/icons";
import { useAppSelector } from "../../store";

interface Props {
  className?: string;
  closeButton?: boolean;
  handleCancel?: MouseEventHandler;
}

interface Errors {
  searchedPokemon?: string;
}

export const SearchForm = ({
  className,
  closeButton = false,
  handleCancel,
}: Props) => {
  const navigate = useNavigate();
  const { isDataCharging } = useAppSelector((state) => state.pokemon);

  const validate = (searchedPokemon: string) => {
    const errors: Errors = {};

    if (searchedPokemon.length < 1) errors.searchedPokemon = "Write an ID";
    else if (searchedPokemon.trim().includes(" "))
      errors.searchedPokemon = "Delete the white spaces";

    return errors;
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { searchedPokemon: "" },
    onSubmit: async ({ searchedPokemon }) => {
      try {
        const errors = validate(searchedPokemon);
        //TODO: Add a better alert
        if (errors.searchedPokemon) return alert(errors.searchedPokemon);

        const resp = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchedPokemon.toLowerCase()}`
        );
        const { id } = await resp.json();

        navigate(`/pokemon/${id}`);
      } catch (e: any) {
        navigate(`/pokemon/not-found`);
      }
    },
  });

  return (
    <Form className={className ? className : ""} onSubmit={handleSubmit}>
      <InputGroup>
        {closeButton && (
          <Button className="btn-custom" onClick={handleCancel}>
            <CloseIcon size={25} />
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
          disabled={isDataCharging}
          readOnly={isDataCharging}
        />
        <Button
          disabled={isDataCharging}
          type="submit"
          variant="info"
          className="btn-custom"
        >
          <SearchIcon size={20} />
        </Button>
      </InputGroup>
    </Form>
  );
};
