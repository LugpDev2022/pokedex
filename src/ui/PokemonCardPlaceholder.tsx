import { Card, Col, ListGroup, Placeholder, Row } from "react-bootstrap";
import white from "../assets/images/white.jpg";

export const PokemonCardPlaceholder = () => (
  <Col xs={11} sm={9} md={6} lg={3}>
    <Card className="mt-5">
      <Card.Header>
        <Row>
          <span>
            <Placeholder xs={7} />
          </span>
        </Row>
        <Placeholder xs={2} />
      </Card.Header>
      <Card.Img src={white} />
      <ListGroup variant="flush">
        <ListGroup.Item className="fs-5">
          <Placeholder xs={6} />
        </ListGroup.Item>
        <ListGroup.Item className="fs-5">
          <Placeholder xs={4} />
        </ListGroup.Item>
        <ListGroup.Item className="fs-5">
          <Placeholder xs={5} />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </Col>
);
