import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { resetError, startGoogleSignIn } from "../../store/auth";
import { AuthModal } from "../components/AuthModal";

export const LoginPage = () => {
  //TODO: Autologin if logged
  const dispatch = useAppDispatch();
  const [shownError, setShownError] = useState<string>();
  const { errorMessage, status } = useAppSelector(
    (state: RootState) => state.auth
  );

  //TODO: Add validators
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(values);
    },
  });

  useEffect(() => {
    dispatch(resetError());
  }, []);

  useEffect(() => {
    if (!errorMessage) return;
    setShownError(getErrorMessage(errorMessage));
  }, [errorMessage]);

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthModal>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-4">
          <Col>
            <Button type="submit" className="w-100">
              Log In
            </Button>
          </Col>
          <Col>
            <Button
              type="button"
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={handleGoogleSignIn}
            >
              Google&nbsp;
              <GoogleIcon />
            </Button>
          </Col>
        </Row>
      </Form>
      {errorMessage && (
        <Alert variant="danger" className="py-2">
          {shownError}
        </Alert>
      )}
      <Row>
        <Col className="d-flex justify-content-end">
          Are you new?&nbsp;
          <Link to="/auth/register">Create account</Link>
        </Col>
      </Row>
    </AuthModal>
  );
};
