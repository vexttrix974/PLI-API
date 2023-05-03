import { getAll, getById, deleteById, updateById, register, loginUser} from "../controllers/userContoller";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require('express');

const routeruser = express();

routeruser.get('/', getAll);

routeruser.get('/:id', getById);

routeruser.post('/register', register);

routeruser.put('/:id', authenticateJWT, updateById);

routeruser.delete('/:id', authenticateJWT, deleteById);

routeruser.post('/auth', loginUser, authenticateJWT);

export default routeruser;