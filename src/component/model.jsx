import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Models = (props) => {
  const { show, modalTitle, handleClose, children, handleSubmit } =
    props;
  return (
    <>
      <Modal backdrop="static" show={show}>
        <Form>
          <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
            <i class="bi bi-x-lg"  onClick={handleClose}>
              {" "}
            </i>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Models;
