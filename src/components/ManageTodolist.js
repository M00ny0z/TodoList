/*
   Author: Michael Babko
   Date: March 2021

   Renders all of the live Todolist items from the Todolist API.
   Allows for creating of Todolist items.
  
   PROPS:
      createAlert(message, type) - Function to call in order to display alerts
*/

import React from 'react';
import useItems from '../hooks/useItems.js';

import CreateTodolistModal from './CreateTodolistModal';

const ManageTodolist = (props) => {
   const [items] = useItems();

   /**
    * Displays all Todolist items from the TodolistAPI
    * @returns {JSX[]} - The array of Todolist items to display that are in chronological order.
    */
   const renderItemsList = () => {
      return items.map((data, index) => {
         const date = new Date(data["date-created"]);
         const month = date.toLocaleString('default', {month: 'long'});
         const day = date.getDate();
         const year = date.getFullYear();
         const dateFormat = `${month} ${day}, ${year}`; 
         return (
            <li key={index}>
               <div className="card" style={{width: '18rem', padding: '18px'}}>
                  <div className="card body" style={{border: 'none'}}>
                     <h5 className="card-title">{data.title}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">
                        {dateFormat}
                     </h6>
                     <p className="card-text">
                        {data.text}
                     </p>
                  </div>
               </div>   
            </li>
         );
      });
   };

   return(
      <div className="d-felx flex-column mt-2">
         <div className="d-flex justify-content-center mb-2">
            <CreateTodolistModal createAlert={props.createAlert} />
         </div>
         <ul>
            {renderItemsList()}
         </ul>
      </div>
   );
};

export default ManageTodolist;