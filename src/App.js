/*
   Edited by: Maria Babko
   Date March 2021

   Renders a Todolist page.
*/
import React, { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import ManageTodolist from './components/ManageTodolist';

/**
  * Sends POST request to TodolistAPI to add todo-list item.
  */
const App = () => {
   const [alertStatus, setAlertStatus] = useState(false);
   const [currentAlert, setAlert] = useState('');
   const [alertType, setAlertType] = useState('');


   /**
    * Creates a new alert and displays it to the user
    * After 2 seconds, clears the alarm.
    * @param {String} message - The alert message to display
    */
   const createAlert = (message, type) => {
      setAlertType(type);
      setAlert(message);
      setAlertStatus(true);

      setTimeout(() => {
         setAlert('');
         setAlertStatus('');
         setAlertStatus(false);
      }, 2000);
   }

   /**
    * If alarm status is set to true, displays the alarm
    * @return {JSX} - The JSX of the alarm if the status of the alarm is true
    */
   const renderAlert = () => {
      if (alertStatus) {
         return (
            <Alert variant={alertType} className="d-flex align-items-center">
               <AlertIcon />
               { currentAlert }
            </Alert>
         );
      }
   };

   return (
      <div>
         { renderAlert() }
         <ManageTodolist createAlert={createAlert} />
      </div>
      
   );
}

export default App;

