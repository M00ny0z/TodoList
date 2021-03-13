/*
   Author: Michael Babko
   Date: March 2021

   Allows for the creation of Todolist items.
*/
import React from 'react';
import { useFormik } from 'formik';
import api from '../api/api';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * Validates the form entries to meet certain character requirements.
 * @param {Formik} - The entried values for the formik fields.
 * @returns {String} - Error messages to guide user inputs for the formik fields.
 */
const validate = (values) => {
   const errors = {};

   if(!values.title) {
      errors.title = '*Required';
   } else if (values.title.length > 25) {
      errors.title = '*Must be 25 characters or less';
   }

   if(!values.text) {
      errors.text = '*Required';
   } else if (values.text.length > 100) {
      errors.text = '*Must be 100 characters or less'
   }

   return errors;
}

const CreateTodolistForm = (props) => {

   const formik = useFormik({
      initialValues: {
         title: '',
         text: ''
      },
      // forces the user to pass validation before submitting the form
      validate,
      onSubmit: async (values) => {
         try {
            await api.post('/items', values);
            props.createAlert('Successfully added a new list item.', 'success');
         } catch (error) {
            props.createAlert('To use this endpoint, you must provide a title,' +
            ' and text parameters', "error");
         }
         props.handleClose();
      }
   });

   return (
      <Form onSubmit={formik.handleSubmit}>
         <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
               id="title"
               name="title"
               onChange={formik.handleChange}
               value={formik.values.title}
               className="form-control"
               required
               minLength="1"
            />
            {formik.errors.title ? <div>{formik.errors.title}</div> : null}

            <label htmlFor="text">Text</label>
            <input
               id="text"
               name="text"
               onChange={formik.handleChange}
               value={formik.values.text}
               className="form-control"
               required
               minLength="1"
            />
            {formik.errors.text ? <div>{formik.errors.text}</div> : null}

            <div className="d-flex justify-content-end mt-2">
               <Button type="submit">Submit</Button>
            </div>
         </div>
      </Form>
   );
}

export default CreateTodolistForm;