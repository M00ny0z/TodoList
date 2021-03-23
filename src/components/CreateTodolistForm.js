/*
  Author: Maria Babko
  Date: March 2021

  Uses formik to help create new todo-list items

*/

import React from 'react';
import { useFormik } from 'formik';
import api from '../api/api';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateTodolistForm = (props) => {

   /**
    * Validates the users input in the form
    * @param {Formik} - the formik form
    * @returns {String} - An error message to display the user
    */
   const validate = values => {
      const errors = {};

      if(!values.title) {
         errors.title = 'Required';
      } else if (values.title.length > 30) {
         errors.title = 'Must be 30 characters or less';
      }

      if(!values.text) {
         errors.text = 'Required';
      } else if (values.text.length > 80) {
         errors.text = 'Must be 80 characters or less';
      }

      return errors;
   };

   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
      initialValues: {
         title: '',
         text:'',
      },
      validate,

      onSubmit: async (values) => {
         try {
            await api.post('/items', values);
            props.createAlert('Successfully added new item!', 'success');
         } catch (error) {
            props.createAlert('To use this endpoint, you must provide a title, and text ' +
                              'parameters', "error");
         }
         props.handleClose();
      }
   });

   return (
      <Form onSubmit={formik.handleSubmit}>
         <div className="form-group">
            
            <label htmlFor="title">Todolist Title:</label>
            <input
              id="title"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className="form-control"
              required
              minLength="1"
            />
            {formik.touched.title && formik.errors.title ? 
            <div> 
               {formik.errors.title}
            </div> : null}

            <label htmlFor="text">Todolist Description:</label>
            <input
               id="text"
               name="text"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.text}
               className="form-control"
               required
               minLength="1"
            />
            {formik.touched.text && formik.errors.text ? 
            <div> 
               {formik.errors.text}
            </div> : null}

            <div className="d-flex justify-content-end mt-2">
               <Button type="submit">Submit</Button>
            </div>
         </div>
      </Form>
   );
 };

 export default CreateTodolistForm;
