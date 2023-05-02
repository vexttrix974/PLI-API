import { getAll, getById, deleteById, updateById, register, loginUser} from "../controllers/userContoller";

const express = require('express');

const routeruser = express();

routeruser.get('/users', getAll);

routeruser.get('/users/:id', getById);

routeruser.post('/users/register', register);

routeruser.patch('/users/:id', updateById);

routeruser.delete('/users/:id', deleteById);

routeruser.post('/users/auth', loginUser);

export default routeruser;