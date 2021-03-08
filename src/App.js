/*
   Edited by: Michael Babko
   Date March 2021

   Renders a Todolist page.
*/
import React, { useState } from 'react';

import ManageTodolist from './components/ManageTodolist';

const App = () => {
   const [alertStatus, setAlertStatus] = useState(false);
   const [currentAlert, setAlert] = useState('');
   const [alertType, setAlertType] = useState('');


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
   <div className="App">
      <button className="btn btn-primary">Add Item</button>
      <ul>
         <li>
            <div class="card" style={{width: '18rem'}}>
               <div class="card-body">
                  <h5 class="card-title">Go Shopping</h5>
                  <h6 class="card-subtitle mb-2 text-muted">January 5, 2021</h6>
                  <p class="card-text">
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                  </p>
               </div>
            </div>
         </li>

         <li>
            <div class="card" style={{width: '18rem'}}>
               <div class="card-body">
                  <h5 class="card-title">Go Shopping</h5>
                  <h6 class="card-subtitle mb-2 text-muted">January 5, 2021</h6>
                  <p class="card-text">
                     Some quick example text to build on the card title and make up the bulk of 
                     the card's content.
                  </p>
               </div>
            </div>
         </li>

         <li>
            <div class="card" style={{width: '18rem'}}>
               <div class="card-body">
                  <h5 class="card-title">Go Shopping</h5>
                  <h6 class="card-subtitle mb-2 text-muted">January 5, 2021</h6>
                  <p class="card-text">
                     Some quick example text to build on the card title and make up the bulk of 
                     the card's content.
                  </p>
               </div>
            </div>
            
            <ManageTodolist/>
         </li>
      </ul>
   </div>

 );
}

export default App;

// { renderAlert() }
// <ManageTodolist createAlert={createAlert} />