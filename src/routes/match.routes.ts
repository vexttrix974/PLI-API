import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from "../controllers/Match.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routermatch = express();

routermatch.get("/match/", getAll);
routermatch.get("/match/:id", getById);
routermatch.post("/match/", authenticateJWT, create);
routermatch.put("/match/:id", authenticateJWT, updateById);
routermatch.delete("/match/:id", authenticateJWT, deleteById);

export default routermatch;
