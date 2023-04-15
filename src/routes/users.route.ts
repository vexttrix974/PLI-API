import { createUser, getAll, getById} from "../controllers/users.controller";

const express = require('express');

const routeruser = express();

routeruser.get('/users', getAll);

routeruser.get('/users/:id', getById);

routeruser.post('/users/register', createUser);

export default routeruser;