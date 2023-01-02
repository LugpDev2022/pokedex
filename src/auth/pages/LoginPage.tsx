import { FormEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../assets/icons/GoogleIcon";
import { AuthModal } from "../components/AuthModal";

export const LoginPage = () => {
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <AuthModal>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
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
