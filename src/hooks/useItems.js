/*
   Author: Michael Babko
   Date: March 2021

   Makes requests to the Todolist for the api information
*/

import { useState, useEffect } from 'react';
import api from '../api/api';

const useItems = () => {
   const [itemList, setItems ] = useState([]); 
   //useState({items : []}) <-- found that this could help the TypeError: Cannot read property 
   // 'map' of undefined. But then I get back to the TypeError: items.map() is not a function

   useEffect(() => {

      const requestItems = async () => {
         getItems();
      };

      requestItems();
}, []);


const getItems = async () => {
   const response = await api('/items');
   const items = response.items;
   setItems(items); 
   
}; 


return [itemList, getItems];
};

export default useItems;

