
import * as dotenv from 'dotenv';
import { Request, Response } from "express";
import { db } from "../database/admin";
import { createMatch, updateMatch, deleteMatch } from "../services/MatchService";

dotenv.config();


/* It gets all Matchs */
export async function getAll(req: Request, res: Response) {
  const QueryResult = await db.collection("Match").get();
  const match: any[] = [];
//   console.log(QueryResult.data())
  let matches :any []= []
  QueryResult.forEach(async (doc: { data: () => any }) => {
    matches.push(doc)
});
  for (let doc of matches) {
    let d = doc.data();
    d.createur = (await db.collection("Users").doc(d.user_id_1).get()).data();
    d.invite =(await db.collection("Users").doc(d.user_id_2).get()).data();
    match.push(d);
  }

  res.json(match);
}

/* It gets a Match by its id */
export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const QueryResult = await db.collection("Match").doc(id).get();
  if (!QueryResult.exists) {
    res.status(404).json({ error: "match not found" });
    return;
  }
  res.json(QueryResult.data());
}

/* The function create new Match */
export async function register(req: Request, res: Response) {
  try {
    await createMatch(req, res);
  } catch (error: any) {
    res.send({
      message:error.message,
      error,
    });
  }
}

/* The function updates new Match */
export async function updateById(req: Request, res: Response) {
  try {
    await updateMatch(req, res);
  } catch (error: any) {
    res.send({
      message:error.message,
      error,
    });
  }
}

/* The function deletes a Match by its id */
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteMatch(req, res);
  } catch (error: any) {
    res.send({
      message: error.message,
      error,
    });
  }
}


