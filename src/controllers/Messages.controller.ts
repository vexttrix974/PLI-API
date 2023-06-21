import {
  createMessage,
  updateMessage,
  deleteMessage,
} from "../services/Message.services";
import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.message.findMany({
    include: { match: true, sender: true, receiver: true },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.message.findUnique({
    where: { id },

    include: { match: true, sender: true, receiver: true },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE MESSAGE
export async function create(req: Request, res: Response) {
  try {
    await createMessage(req, res);
  } catch (error) {
    res.send("Message not created");
    console.log(error);
  }
}

// UPDATE MESSAGE
export async function updateById(req: Request, res: Response) {
  try {
    await updateMessage(req, res);
  } catch (error) {
    res.send("Message has been updated");
  }
}

// DELETE MESSAGE
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteMessage(req, res);
  } catch (error) {
    res.send("Message not delete");
    console.log(error);
  }
}
