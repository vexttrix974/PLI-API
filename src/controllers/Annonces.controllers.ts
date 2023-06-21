import {
  createAnnounces,
  updateAnnounces,
  deleteAnnounces,
} from "../services/Annonces.services";
import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.annonces.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.annonces.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE ANNOUNCES
export async function create(req: Request, res: Response) {
  try {
    await createAnnounces(req, res);
  } catch (error) {
    res.send("Announces not create");
    console.log(error);
  }
}

// UPDATE ANNOUNCES
export async function updateById(req: Request, res: Response) {
  try {
    await updateAnnounces(req, res);
  } catch (error) {
    res.send("Announces has been updated");
  }
}

// DELETE ANNOUNCES
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteAnnounces(req, res);
  } catch (error) {
    res.send("Announces not delete");
    console.log(error);
  }
}
