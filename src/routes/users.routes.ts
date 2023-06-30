import {
  getAll,
  getById,
  register,
  updateById,
  deleteById,
  login,
} from "../controllers/Users.controller";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routerusers = express();

routerusers.get("/users/", getAll);
routerusers.get("/users/:id", getById);
routerusers.post("/users/register/", register);
routerusers.post("/users/auth/", login, register);
routerusers.put("/users/:id", authenticateJWT, updateById);
routerusers.delete("/users/:id", authenticateJWT, deleteById);

export default routerusers;
