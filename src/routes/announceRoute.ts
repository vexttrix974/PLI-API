import { getAll, getById, deleteById, updateById, register, } from "../controllers/announceController";

const express = require('express');

const routerannounces = express();

routerannounces.get('/', getAll);

routerannounces.get('/:id', getById);

routerannounces.post('/register', register);

routerannounces.put('/:id', updateById);

routerannounces.delete('/:id', deleteById);



export default routerannounces ;