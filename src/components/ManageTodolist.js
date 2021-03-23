/*
  Author: Maria Babko
  Date: March 2021

  Renders all of the live todo-list items from the Todo-list API.
  Allows for creating new todo-list items.

  PROPS:
      createAlert(message, type) - Function to call should to display alerts
*/

import React, { useState } from 'react';
import useItems from '../hooks/useItems';

import CreateTodolistModal from './CreateTodolistModal';


const ManageTodolist = (props) => {
   const [items] = useItems();  // this.items = items;

   /**
    * Displays all current todo-list items.
    * @return {JSX[]} - The array of todo-list items to display in each separate box.
    */
   const renderItemsTodolist = () => {
      return items.map((item, index) => {
         const date = new Date(item['date-created']);
         const month = date.toLocaleString('default', {month: 'long'});
         const day = date.getDate();
         const year = date.getFullYear();
         return ( 
               <li key={ index }>
                  <div className="card" style={{width: '18rem'}}>
                     <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
   
                        <h6 className="card-subtitle mb-2 text-muted">{month} {day} , {year}</h6>
                        <p className="card-text">{item.text}</p>
                     </div>
                  </div>
               </li>

         );
      });
   };

   return(
      <div className="d-flex flex-column mt-2">
         <div className="d-flex justify-content-center align-items-center mb-2">
            <CreateTodolistModal createAlert={props.createAlert} />
         </div>
            <ul>{ renderItemsTodolist() }</ul>
      </div>   
   );

};

export default ManageTodolist;
