import {
    getAll, getById, register, updateById, deleteById, login,
  } from '../controllers/Users.controller';
import authenticateJWT from '../middlewares/authenticateJWT';
 
  
  const express = require('express');
  
  const routerusers = express();
  
  // route getAll
  routerusers.get('/users/', getAll);
  //  route getById
  routerusers.get('/users/:id', getById);
  //  route post
  routerusers.post('/users/register/',authenticateJWT, register);
  routerusers.post('/users/auth/',login, register);

  // route update
  routerusers.put('/users/:id',authenticateJWT, updateById);
  // route delete
  routerusers.delete('/users/:id',authenticateJWT, deleteById);
  export default routerusers;
  