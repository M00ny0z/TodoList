/*
   Author: Maria Babko
   Date: March 2021

   Makes requests to the Todolist for the api information
*/

import { useState, useEffect } from 'react';
import api from '../api/api';

const useItems = () => {
   const [itemList, setItems] = useState([]); 
   
   useEffect(() => {

      const requestItems = async () => {
         getItems();
      };

      requestItems();
   }, []);


   const getItems = async () => {
      const response = await api('/items');
      const items = response.data.items;
      setItems(items); 
      
   }; 


   return [itemList, getItems];
};

export default useItems;

