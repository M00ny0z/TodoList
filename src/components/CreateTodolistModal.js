/*
   Author: Michael Babko
   Date: March 2021

   Creates formik that allows for the creation of Todolist items.
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
         <Button className="btn btn-primary" onClick={handleShow}>
            Create Item
         </Button>

         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header>
               <Modal.Title>Todo Task</Modal.Title>
               <Button className="btn btn-secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Header>

            <Modal.Body>
               <CreateTodolistForm createAlert={props.createAlert}
                  handleClose={handleClose} />
            </Modal.Body>
         </Modal>
      </div>
   );
};

export default CreateTodolistModal;