import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthModal } from "../components/AuthModal";

export const RegisterPage = () => {
  //TODO: Add validators

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
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
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={values.username}
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

        <Button type="submit" className="w-100 px-0 mb-3">
          Register
        </Button>

        <Row>
          <Col className="d-flex justify-content-end">
            <Link to="/auth/login">Do you have an account?</Link>
          </Col>
        </Row>
      </Form>
    </AuthModal>
  );
};
