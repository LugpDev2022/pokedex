import { useFormik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";
import { useAppDispatch } from "../../store";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { AuthModal, FormError } from "../components";
import { useAuthPage } from "../hooks";

interface Values {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { shownError, disableUI } = useAuthPage();
  const validate = ({ email, password }: Values) => {
    const errors: Errors = {};

    // Email validations
    if (!email) errors.email = "Required";
    else if (!email.includes("@") || !email.includes(".") || email.length < 2) {
      errors.email = "Must be a valid mail";
    }

    // Password validations
    if (!password) errors.password = "Required";

    return errors;
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
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
          {errors.email && <FormError error={errors.email} />}
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
          {errors.password && <FormError error={errors.password} />}
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
          <Alert
            variant="danger"
            className="py-2 fw-bold text-center animate__animated animate__bounceIn"
          >
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
