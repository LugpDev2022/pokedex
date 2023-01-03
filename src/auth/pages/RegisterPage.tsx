import { useFormik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { AuthModal } from "../components/AuthModal";
import { useAuthPage } from "../hooks/useAuthPage";

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { shownError, disableUI } = useAuthPage();

  //TODO: Add validators
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            disabled={disableUI}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={values.username}
            onChange={handleChange}
            disabled={disableUI}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            disabled={disableUI}
          />
        </Form.Group>

        <Button type="submit" className="w-100 px-0 mb-3" disabled={disableUI}>
          Register
        </Button>
        {shownError && (
          <Alert variant="danger" className="py-1">
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
