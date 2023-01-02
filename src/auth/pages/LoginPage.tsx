import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";
import { AuthModal } from "../components/AuthModal";

export const LoginPage = () => {
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
            >
              Google&nbsp;
              <GoogleIcon />
            </Button>
          </Col>
        </Row>
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
