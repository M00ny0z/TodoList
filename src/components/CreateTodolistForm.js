/*
  Author: Maria Babko
  Date: March 2021

  Form to help create new items for the Todolist

  
import React from 'react';
import { useFormik } from 'formik';
import api from '../api/api';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateTodolistForm = (props) => {

   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
      initialValues: {
         date-created: '',
         title: '',
         description:'',
      },
      onSubmit: async (values) => {
         try {
            await api.post('/item', values);
            props.createAlert('Successfully created new item!', 'success');
         } catch (error) {
            props.createAlert('There was an error creating the item.', 'danger');
         }
         props.handleClose();
      }
   });

   return (
      <Form onSubmit={formik.handleSubmit}>
         <div className="form-group">
            <label htmlFor="title">Date Created</label>
            <input
              id="date-created"
              name="date-created"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              required
              minLength="1"
            />
            <label htmlFor="title">Todolist Title</label>
            <input
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              className="form-control"
              required
              minLength="1"
            />
            <label htmlFor="title">Member Email</label>
            <input
               id="email"
               name="email"
               onChange={formik.handleChange}
               value={formik.values.email}
               className="form-control"
               required
               minLength="1"
            />
            <label htmlFor="title">Todolist Description</label>
            <input
               id="description"
               name="description"
               onChange={formik.handleChange}
               value={formik.values.description}
               className="form-control"
               required
               minLength="1"
            />
            <div className="d-flex justify-content-end mt-2">
               <Button type="submit">Submit</Button>
            </div>
         </div>
      </Form>
   );
 };

 export default CreateTodolistForm;



*/
