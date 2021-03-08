/*
  Author: Michael Babko
  Date: March 2021

  Renders all of the live todo-list items from the Todo-list API.
*/

import React, { useState } from 'react';
import useItems from '../hooks/useItems';
//import TodolistModal from './TodolistModal';
//import CreateTodolistModal from './EditTodoListModal';

//import api from '../api/api';
import Table from 'react-bootstrap/Table';
//import Ex from './Ex';

const ManageTodolist = (props) => {
   const [items, getItems] = useItems();  // this.items = items;
   const [displayItems, setDisplayItems] = useState([]);

   
   const renderItemsTable = () => {

      return items.map((item) => { // getting a property undefined error here
         return ( 
            <tr key={ item.date-created }>
               <td>{ item.date-created }</td>
               <td>{ item.title }</td>
               <td>{ item.text }</td>
            </tr>
         );
      });
   };

   return(
      <div className="d-flex flex-column mt-2">
      <Table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Title</th>
               <th>Text</th>
               </tr>
         </thead>
         <tbody>
         { renderItemsTable() }
         </tbody>
      </Table>
   </div>
   );
};

export default ManageTodolist;