import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = (props) => {
  const { show, modalSave, heading, modalClose, children } = props;
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title> {heading}</Modal.Title>
          <i class="bi bi-x-lg" onClick={modalClose}></i>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
