import { Request, Response } from 'express';
import { Announceinterface} from '../interfaces';
import { db } from '../database/admin';



/* This function creates a new user in the database */
export async function createAnnounces(req: Request, res: Response) {
  const AnnounceData: Announceinterface = {

    title : req.body.title,
    description : req.body.description ,
    image_url : req.body.image_url,
    link_url : req.body.link_url,
    created_at : req.body.link_url
 
  };
  try {
    const userRef = await db.collection("Annonces").add(AnnounceData);
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
export async function updateAnnounces(req: Request, res: Response) {
    const Annonceid = req.params.id;
    const AnnounceData: Announceinterface = {

        title : req.body.title,
        description : req.body.description ,
        image_url : req.body.image_url,
        link_url : req.body.link_url,
        created_at : req.body.link_url
     
      };
  try {
    await db.collection("Annonces").doc(Annonceid).update(AnnounceData);
    res.json({ message: "Annonuce updated successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
}

/* It deletes a user from the database based on the id passed in the request */
export async function deleteAnnounces(req: Request, res: Response) {
  const Annonceid = req.params.id;
  try {
    await db.collection("Annonces").doc(Annonceid).delete();
    res.json({ message: "Announces deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete Announces", error });
  }
}