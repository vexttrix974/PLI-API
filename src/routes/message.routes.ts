import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from "../controllers/Messages.controller";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routermessages = express();

routermessages.get("/message/", getAll);
routermessages.get("/message/:id", getById);
routermessages.post("/message/", authenticateJWT, create);
routermessages.put("/message/:id", authenticateJWT, updateById);
routermessages.delete("/message/:id", authenticateJWT, deleteById);

export default routermessages;
