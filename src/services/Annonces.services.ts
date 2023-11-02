import { Request, Response } from "express";
import { Annonces } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE ANNOUNCES
export async function createAnnounces(req: Request, res: Response) {
  try {
    const datas: Annonces = req.body;
    console.log(datas);
    const QueryResult = await prisma.annonces.create({
      data: datas,
    });
    console.log(QueryResult);
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Announces not created");
    console.log(error);
  }
}

// UPDATE ANNOUNCES
export async function updateAnnounces(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.annonces.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.annonces.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Announces has not been updated");
  }
}

// DELETE ANNOUNCES
export async function deleteAnnounces(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.annonces.delete({
      where: { id },
    });
    res.send("Annonces delete");
  } catch (error) {
    res.send("Announces  not delete");
  }
}
