
import authenticateJWT from '../middlewares/authenticateJWT';
import {
    getAll, getById, create, updateById, deleteById, 
  } from '../controllers/Match.controllers';
  
  const express = require('express');
  
  const routermatch = express();
  
  // route getAll
  routermatch.get('/match/', getAll);
  //  route getById
  routermatch.get('/match/:id', getById);
  //  route post
  routermatch.post('/match/',authenticateJWT, create);


  // route update
  routermatch.put('/match/:id',authenticateJWT, updateById);
  // route delete
  routermatch.delete('/match/:id',authenticateJWT, deleteById);
  export default routermatch;
  