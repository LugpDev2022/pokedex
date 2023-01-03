import { ReactElement } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  children: ReactElement[] | ReactElement;
}

export const AuthModal = ({ children }: Props) => (
  <Modal
    show
    animation={false}
    backdrop={false}
    centered
    className="my-modal bg-primary"
  >
    <Modal.Title className="text-center text-secondary mt-3 pokemon-font fs-1 animate__animated animate__fadeIn animate__faster">
      Pokedex
    </Modal.Title>
    <Modal.Body className="py-0 animate__animated animate__fadeIn animate__faster">
      {children}
    </Modal.Body>
  </Modal>
);
