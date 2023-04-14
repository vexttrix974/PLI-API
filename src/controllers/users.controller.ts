import { Request, Response } from "express";
// import User from "../database/models/User";

let {
  collection,
  getDocs,
  addDoc,
} = require("firebase/firestore/lite");

const db = require('../database/instance');

export function getAll(req: Request, res: Response) {
  req = collection(db, "Users");
  getDocs(req).then((snapshoot: any) => {
    let data = snapshoot.docs.map((doc: any) => doc.data());
    res.json(data);
  });
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = collection(db, "Users");
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
