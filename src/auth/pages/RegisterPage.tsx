import { useFormik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { AuthModal, FormError } from "../components";
import { useAuthPage } from "../hooks/useAuthPage";

interface Values {
  email: string;
  username: string;
  password: string;
}

interface Errors {
  email?: string;
  username?: string;
  password?: string;
}

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { shownError, disableUI } = useAuthPage();

  const validate = ({ email, username, password }: Values) => {
    const errors: Errors = {};

    // Email validations
    if (!email) errors.email = "Required";
    else if (!email.includes("@") || !email.includes(".") || email.length < 2) {
      errors.email = "Must be a valid mail";
    }

    // Username validations
    if (!username) errors.username = "Required";
    else if (username.length < 3) {
      errors.username = "Use a longer username";
    } else if (username.length > 20) {
      errors.username = "Use a shorter username";
    }

    // Password validations
    if (!password) errors.password = "Required";
    else if (password.length < 5) {
      errors.password = "Use a longer password";
    }

    return errors;
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      const { email, username, password } = values;
      dispatch(
        startCreatingUserWithEmailPassword({
          email,
          username,
          password,
        })
      );
    },
  });

  return (
    <AuthModal>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            disabled={disableUI}
          />
          {errors.email && <FormError error={errors.email} />}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={values.username}
            onChange={handleChange}
            disabled={disableUI}
          />
          {errors.username && <FormError error={errors.username} />}
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

        <Button
          type="submit"
          className="w-100 px-0 mb-3 fw-bold"
          disabled={disableUI}
        >
          Register
        </Button>
        {shownError && (
          <Alert
            variant="danger"
            className="py-2 fw-bold text-center animate__animated animate__bounceIn"
          >
            {shownError}
          </Alert>
        )}

        <Row>
          <Col className="d-flex justify-content-end">
            {disableUI ? (
              <span className="text-muted">Do you have an account?</span>
            ) : (
              <Link to="/auth/login">Do you have an account?</Link>
            )}
          </Col>
        </Row>
      </Form>
    </AuthModal>
  );
};
