/*
   Author: Michael Babko
   Date: March 2021

   Creates an API object which will send requests to the Todolist API
*/

import axios from 'axios';
import { API_URL } from '../constants';

export default axios.create({
    baseURL: `${API_URL}`
});
