import { Request, Response } from 'express';
import { Mactchinterface} from '../interfaces';
import { db } from '../database/admin';



/* This function creates a new user in the database */
export async function createMatch(req: Request, res: Response) {
  const MatchData: Mactchinterface = {
    user_id_1 : req.body.user_id_1,
    user_id_2 : req.body.user_id_2 ,
    status : req.body.status,
    created_at : req.body.Date,
 
  };
  try {
    const userRef = await db.collection("Match").add(MatchData);
    const MatchSnapshot = await userRef.get();
    const Match = MatchSnapshot.data();




    res.json(Match);
  } catch (error:any) {
    res.send({
      message: error.message,
      error,
    });
  }
}

/* This function updates a user's information in the database */
export async function updateMatch(req: Request, res: Response) {
    const MatchId = req.params.id;
    const MatchData: Mactchinterface = {

        user_id_1 : req.body.user_id_1,
        user_id_2 : req.body.number.user_id_2 ,
        status : req.body.status,
        created_at : req.body.Date,
     
      };
  try {
    await db.collection("Match").doc(MatchId).update(MatchData);
    res.json({ message: "Match updated successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
}

/* It deletes a user from the database based on the id passed in the request */
export async function deleteMatch(req: Request, res: Response) {
  const MatchId = req.params.id;
  try {
    await db.collection("Match").doc(MatchId).delete();
    res.json({ message: "Match deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete Match", error });
  }
}