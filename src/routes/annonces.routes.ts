import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from "../controllers/Annonces.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routerannounces = express();

routerannounces.get("/announces/", getAll);
routerannounces.get("/announces/:id", getById);
routerannounces.post("/announces/", create);
routerannounces.put("/announces/:id", authenticateJWT, updateById);
routerannounces.delete("/announces/:id", authenticateJWT, deleteById);

export default routerannounces;
