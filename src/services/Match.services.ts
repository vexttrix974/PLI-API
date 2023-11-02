import { Request, Response } from "express";
import IMatch from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE MATCH
export async function createMatch(req: Request, res: Response) {
  try {
    const datas: IMatch = JSON.parse(req.body);

    const QueryResult = await prisma.match.create({
      data: datas,
    });

    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.status(500).send("Failed to create match");
    console.log(error);
  }
}

// UPDATE MATCH
export async function updateMatch(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.match.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.match.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Match has not been updated");
  }
}
// DELETE UPDATE
export async function deleteMatch(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.match.delete({
      where: { id },
    });
    res.send("Match not delete");
  } catch (error) {
    res.send("Match  not delete");
  }
}
