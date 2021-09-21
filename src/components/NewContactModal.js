import React, { useRef, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContact } from '../contexts/ContactsProvider';

export default function NewContactModal(props) {
  const idRef = useRef();
  const nameRef = useRef();

  const createContact = useContact();

  function submitHandler(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    props.closeModal();
  }
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
