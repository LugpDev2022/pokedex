import { useFormik } from "formik";
import { MouseEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SearchIcon, CloseIcon } from "../../assets/icons";

interface Props {
  handleCancel?: MouseEventHandler;
  closeButton?: boolean;
  className?: string;
}

//TODO: Add validators
export const SearchForm = ({
  handleCancel,
  closeButton = false,
  className,
}: Props) => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { searchedPokemon: "" },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: ({ searchedPokemon }) => {
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
