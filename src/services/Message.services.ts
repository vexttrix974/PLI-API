import { Request, Response } from "express";
import IMessage from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE MESSAGE
export async function createMessage(req: Request, res: Response) {
  try {
    const datas: IMessage = JSON.parse(req.body);

    const QueryResult = await prisma.message.create({
      data: datas,
    });

    res.json(QueryResult);
  } catch (error) {
    res.status(500).send("Failed to create message");
    console.log(error);
  }
}

// UPDATE MESSAGE
export async function updateMessage(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.message.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.message.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Message has not been updated");
  }
}

// DELETE MESSAGE
export async function deleteMessage(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.message.delete({
      where: { id },
    });
    res.send("Message delete");
  } catch (error) {
    res.send("Message not delete");
  }
}
