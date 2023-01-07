import { Button, Col, Modal, Row } from "react-bootstrap";

interface Props {
  showModal: boolean;
  handleHideModal: any;
  ok: boolean;
}

export const ModalAlert = ({ showModal, handleHideModal, ok }: Props) => (
  <Modal show={showModal} centered>
    <Modal.Body>
      <Row>
        <Col xs={12} className="d-flex justify-content-center mt-2">
          <span className="h4">
            {ok
              ? "Link copied to clipboard"
              : "Error trying to copy to clipboard"}
          </span>
        </Col>

        <Col xs={12} className="d-flex justify-content-center mt-4 mb-2">
          <Button onClick={handleHideModal} variant={ok ? "primary" : "danger"}>
            ACCEPT
          </Button>
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
);
