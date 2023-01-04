import { Spinner } from "react-bootstrap";

interface Props {
  centered: boolean;
  variant?: string;
}

export const AppSpinner = ({ centered, variant }: Props) => {
  if (centered) {
    return (
      <div className="centered-spinner position-absolute top-50 start-50 translate-middle">
        <Spinner animation="border" role="status" variant={variant && variant}>
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
