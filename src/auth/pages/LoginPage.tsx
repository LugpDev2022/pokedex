import { useFormik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";
import { useAppDispatch } from "../../store";
import { startGoogleSignIn } from "../../store/auth";
import { AuthModal } from "../components/AuthModal";
import { useAuthPage } from "../hooks/useAuthPage";

export const LoginPage = () => {
  //TODO: Autologin if logged
  const dispatch = useAppDispatch();
  const { shownError, status } = useAuthPage();

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
            <Button
              type="submit"
              className="w-100"
              disabled={status === "checking"}
            >
              Log In
            </Button>
          </Col>
          <Col>
            <Button
              type="button"
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={handleGoogleSignIn}
              disabled={status === "checking"}
            >
              Google&nbsp;
              <GoogleIcon />
            </Button>
          </Col>
        </Row>
        {shownError && (
          <Alert variant="danger" className="py-2">
            {shownError}
          </Alert>
        )}
      </Form>

      <Row>
        <Col className="d-flex justify-content-end">
          Are you new?&nbsp;
          <Link to="/auth/register">Create account</Link>
        </Col>
      </Row>
    </AuthModal>
  );
};
