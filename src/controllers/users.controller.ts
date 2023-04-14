import { Request, Response } from "express";
import appFire from "../database/instance";
import User from "../database/models/User";

let {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} = require("firebase/firestore/lite");

const firestore = getFirestore(appFire);

export function getAll(req: Request, res: Response) {
  req = collection(firestore, "utilisateurs");
  getDocs(req).then((snapshoot: any) => {
    let data = snapshoot.docs.map((doc: any) => doc.data());
    res.json(data);
  });
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = collection(firestore, "utilisateurs");
    addDoc(data, {
      username: req.body.username,
      email: req.body.email,
    });
    res.send("Record saved successfuly");
  } catch (error) {
    res.send({
      message: "This is an",
      error,
    });
  }
};
