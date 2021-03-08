/*
  Author: Michael Babko
  Date: March 2021

  Renders all of the live todo-list items from the Todo-list API.
*/

import React from 'react';
import useItems from '../hooks/useItems';
import TodolistModal from './TodolistModal';
import CreateTodolistModal from './EditTodolistModal';

//import api from '../api/api';
import Table from 'react-bootstrap/Table';
//import Ex from './Ex';

const ManageTodolist = (props) => {
    const [items] = useItems();  // this.items = items;

    // method is executing, but not our loop
    const renderItemsTable = () => {
        return items.map((item) => {
            return ( 
               <tr key={ item.date-created }> 
                  <td>{ item.date-created }</td>
                  <td>{ item.title }</td>
                  <td>{ item.text }</td>
               </tr>
            );
        });
    };


//<MemberModal createAlert={props.createAlert} />
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
         <td>TEST2</td>
       </tbody>
    </Table>
 </div>
);

};

export default ManageTodolist;

