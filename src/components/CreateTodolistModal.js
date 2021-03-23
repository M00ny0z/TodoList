/*
  Author: Maria Babko
  Date: March 2021

  Allows for the creation of new todo-list items

*/

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateTodolistForm from './CreateTodolistForm';

const CreateTodolistModal = (props) => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div className="mr-2">
         <Button variant="primary" onClick={handleShow}>
            Create Item
         </Button>

         <Modal
            show={show}
            onHide={handleClose}
            backdrops="static"
            keyboard={false}
         >
         <Modal.Header closeButton>
            <Modal.Title>Create Todolist Item</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            <CreateTodolistForm createAlert={props.createAlert} handleClose={handleClose} />
         </Modal.Body>

         </Modal>
      </div>    
   );
};

export default CreateTodolistModal;