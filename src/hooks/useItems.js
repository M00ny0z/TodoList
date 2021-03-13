/*
   Author: Michael Babko
   Date: March 2021

   Makes requests to the TodolistAPI for information regarding Todolist items.
   Returns the array of Todolist items and a function to call to update the list.
*/

import { useState, useEffect } from 'react';
import api from '../api/api';

const useItems = () => {
   const [itemList, setItems] = useState([]);

   /**
    * Initial request for the Todolist information and stores it for use
    */
   useEffect(() => {
      const requestItems = async () => {
         getItems();
      };

      requestItems();
   }, []);

   /**
    * Makes a GET request to the API for the current Todolist information
    */
   const getItems = async () => {
      const response = await api('/items');
      const items = response.data.items;
      setItems(items);
   };

   return [itemList, getItems];
};

export default useItems;