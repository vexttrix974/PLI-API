import { getAll, getById, deleteById, updateById, register, loginUser} from "../controllers/userContoller";

const express = require('express');

const routeruser = express();

routeruser.get('/', getAll);

routeruser.get('/:id', getById);

routeruser.post('/register', register);

routeruser.put('/:id', updateById);

routeruser.delete('/:id', deleteById);

routeruser.post('/auth', loginUser);

export default routeruser;