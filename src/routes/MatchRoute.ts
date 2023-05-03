import { getAll, getById, deleteById, updateById, register, } from "../controllers/MatchController";

const express = require('express');

const routermatch = express();

routermatch.get('/', getAll);

routermatch.get('/:id', getById);

routermatch.post('/register', register);

routermatch.put('/:id', updateById);

routermatch.delete('/:id', deleteById);



export default routermatch;