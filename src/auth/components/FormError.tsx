import { Alert } from "react-bootstrap";

interface Props {
  error: string;
}

export const FormError = ({ error }: Props) => (
  <Alert
    variant="danger"
    className="py-0 mt-2 text-center fw-bold animate__animated animate__fadeIn"
  >
    {error}
  </Alert>
);
