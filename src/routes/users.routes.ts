import {
    getAll, getById, register, updateById, deleteById,
  } from '../controllers/Users.controller';
 
  
  const express = require('express');
  
  const routerusers = express();
  
  // route getAll
  routerusers.get('/users/', getAll);
  //  route getById
  routerusers.get('/users/:id', getById);
  //  route post
  routerusers.post('/users/register/', register);
  // route update
  routerusers.patch('/users/:id', updateById);
  // route delete
  routerusers.delete('/users/:id', deleteById);
  export default routerusers;
  