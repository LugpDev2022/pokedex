import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthModal } from "../components/AuthModal";

export const RegisterPage = () => {
  return (
    <AuthModal>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
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
