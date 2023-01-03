import { useFormik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";
import { useAppDispatch } from "../../store";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { AuthModal } from "../components/AuthModal";
import { useAuthPage } from "../hooks/useAuthPage";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { shownError, disableUI } = useAuthPage();

  //TODO: Add validators
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      dispatch(startLoginWithEmailPassword(values.email, values.password));
    },
  });

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthModal>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            id="email"
            value={values.email}
            onChange={handleChange}
            disabled={disableUI}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="text-secondary">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            disabled={disableUI}
          />
        </Form.Group>

        <Row className="mb-4">
          <Col>
            <Button type="submit" className="w-100" disabled={disableUI}>
              Log In
            </Button>
          </Col>
          <Col>
            <Button
              type="button"
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={handleGoogleSignIn}
              disabled={disableUI}
            >
              Google&nbsp;
              <GoogleIcon />
            </Button>
          </Col>
        </Row>
        {shownError && (
          <Alert variant="danger" className="py-2 fw-bold text-center animate__animated animate__bounceIn">
            {shownError}
          </Alert>
        )}
      </Form>

      <Row>
        <Col className="d-flex justify-content-end text-secondary">
          Are you new?&nbsp;
          {disableUI ? (
            <span className="text-muted">Create account</span>
          ) : (
            <Link to="/auth/register">Create account</Link>
          )}
        </Col>
      </Row>
    </AuthModal>
  );
};
