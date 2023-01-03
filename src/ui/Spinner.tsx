import { Spinner } from "react-bootstrap";

interface Props {
  centered: boolean;
}

export const AppSpinner = ({ centered }: Props) => {
  if (centered) {
    return (
      <div className="centered-spinner position-absolute top-50 start-50 translate-middle">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
