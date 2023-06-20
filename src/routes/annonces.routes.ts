
import authenticateJWT from '../middlewares/authenticateJWT';
import {
    getAll, getById, create, updateById, deleteById, 
  } from '../controllers/Annonces.controllers';
  
  const express = require('express');
  
  const routerannounces = express();
  
  // route getAll
  routerannounces.get('/announces/', getAll);
  //  route getById
  routerannounces.get('/announces/:id', getById);
  //  route post
  routerannounces.post('/announces/',authenticateJWT, create);


  // route update
  routerannounces.put('/announces/:id',authenticateJWT, updateById);
  // route delete
  routerannounces.delete('/announces/:id',authenticateJWT, deleteById);
  export default routerannounces;
  