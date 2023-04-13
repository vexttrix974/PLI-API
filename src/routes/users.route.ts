import { createUser } from "../controllers/users.controller";

const express = require('express');

const routeruser = express();

routeruser.post('/users/register', createUser);

export default routeruser;