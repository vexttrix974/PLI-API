
import authenticateJWT from '../middlewares/authenticateJWT';
import {
    getAll, getById, create, updateById, deleteById, 
  } from '../controllers/Messages.controller';
  
  const express = require('express');
  
  const routermessages = express();
  
  // route getAll
  routermessages.get('/message/', getAll);
  //  route getById
  routermessages.get('/message/:id', getById);
  //  route post
  routermessages.post('/message/',authenticateJWT, create);
  // route update
  routermessages.put('/message/:id',authenticateJWT, updateById);
  // route delete
  routermessages.delete('/message/:id',authenticateJWT, deleteById);
  
  
  export default routermessages;
  