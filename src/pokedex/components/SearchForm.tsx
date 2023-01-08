import { MouseEventHandler } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { SearchIcon, CloseIcon } from "../../assets/icons";

interface Props {
  handleCancel?: MouseEventHandler;
  closeButton?: boolean;
  className?: string;
}

export const SearchForm = ({
  handleCancel,
  closeButton = false,
  className,
}: Props) => {
  return (
    <Form className={className ? className : ""}>
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
        />
        <Button variant="info" className="btn-custom">
          <SearchIcon width={25} height={25} />
        </Button>
      </InputGroup>
    </Form>
  );
};
