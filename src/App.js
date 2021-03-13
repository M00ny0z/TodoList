/*
   Author: Michael Babko
   Date: March 2021

   Renders the page with a live Todolist.
*/
   import React, { useState } from 'react';
   
   import Alert from 'react-bootstrap/Alert';
   import ManageTodolist from './components/ManageTodolist';
   
   /**
    * Sends POST request to Todolist API to add a Todolist item.
    */
   const App = () => {
      const [alertStatus, setAlertStatus] = useState(false);
      const [currentAlert, setAlert] = useState('');
      const[alertType, setAlertType] = useState('');

      /**
       * Creates a new alert and displays it to the user.
       * After 3 seconds, the alarm is cleared
       * @param {String} message - The alert message to be displayed
       */
      const createAlert = (message, type) => {
         setAlertType(type);
         setAlert(message);
         setAlertStatus(true);

         setTimeout(() => {
            setAlert('');
            setAlertStatus('');
            setAlertStatus(false);
         }, 3000);
      }

   /**
    * If the alarm status is set to true, renders the alarm
    * @returns {JSX} - The JSX of the alarm when the alarm status is true
    */
   const renderAlert = () => {
      if (alertStatus) {
         return (
            <Alert variant={alertType} className="d-flex align-items-center">
               { currentAlert }
            </Alert>
         );
      }
   };

      return (
         <div className="App">
            { renderAlert() }
            <ManageTodolist createAlert={createAlert}/>
         </div>
      );
   }
   
export default App;