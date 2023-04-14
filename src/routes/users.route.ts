import { createUser, getAll} from "../controllers/users.controller";

const express = require('express');

const routeruser = express();

routeruser.get('/users', getAll)

routeruser.post('/users/register', createUser);

export default routeruser;