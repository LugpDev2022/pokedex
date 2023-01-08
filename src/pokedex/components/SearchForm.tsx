import { MouseEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { SearchIcon, CloseIcon } from "../../assets/icons";

interface Props {
  handleCancel: MouseEventHandler;
}

export const SearchForm = ({ handleCancel }: Props) => {
  return (
    <Form>
      <InputGroup>
        <Button className="btn-custom" onClick={handleCancel}>
          <CloseIcon width={25} height={25} />
        </Button>
        <Form.Control
          size="sm"
          type="text"
          className="form-custom"
          placeholder="Search a pokemon"
        />
        <Button variant="info" className="btn-custom">
          <SearchIcon width={25} height={25} />
        </Button>
      </InputGroup>
    </Form>
  );
};
