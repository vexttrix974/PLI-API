import * as dotenv from 'dotenv';
import { Request, Response } from "express";
import { db } from "../database/admin";
import { createAnnounces, updateAnnounces, deleteAnnounces } from "../services/announceService";

dotenv.config();


/* It gets all annonces  */
export async function getAll(req: Request, res: Response) {
  const QueryResult = await db.collection("Annonces").get();
  const announces: any[] = [];
  QueryResult.forEach((doc: { data: () => any }) => {
    announces.push(doc.data());
  });
  res.json(announces);
}

/* It gets a announces by its id */
export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const QueryResult = await db.collection("Annonces").doc(id).get();
  if (!QueryResult.exists) {
    res.status(404).json({ error: "announces not found" });
    return;
  }
  res.json(QueryResult.data());
}

/* The function create new annonces */
export async function register(req: Request, res: Response) {
  try {
    await createAnnounces(req, res);
  } catch (error: any) {
    res.send({
      message:error.message,
      error,
    });
  }
}

/* The function updates new annonces */
export async function updateById(req: Request, res: Response) {
  try {
    await updateAnnounces(req, res);
  } catch (error: any) {
    res.send({
      message:error.message,
      error,
    });
  }
}

/* The function deletes a announce by its id */
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteAnnounces(req, res);
  } catch (error: any) {
    res.send({
      message: error.message,
      error,
    });
  }
}

