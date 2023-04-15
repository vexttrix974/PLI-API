import { Request, Response } from "express";
// import User from "../database/models/User";
import { Userinterface } from "../interfaces";

const {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
} = require("firebase/firestore/lite");

const db = require('../database/instance');
const bcrypt = require('bcrypt');

// Get All Users

export function getAll(req: Request, res: Response) {
  req = collection(db, "Users");
  getDocs(req).then((snapshoot: any) => {
    const QueryResult = snapshoot.docs.map((doc: any) => doc.data());
    res.json(QueryResult);
  });
}

// Get by Id

export async function getById(req: Request, res: Response) {

  const user = req.params.id;
  req = doc(db, "Users", user);

  try {
    const QueryResult = await getDoc(req);
    if(QueryResult.exists()) {
      res.json(QueryResult.data());
      console.log(QueryResult.data());
    } else {
      console.log('User does not exist')
    }
  } catch (error) {
    res.send({
      message: "This is an",
      error,
    });
  }
}


// Create a New User

export const createUser = async (req: Request, res: Response) => {

  const user: Userinterface = req.body;
  const hash = await bcrypt.hash(user.password, 10);

  try {
    const QueryResult = collection(db, "Users");
    addDoc(QueryResult, {
      username: user.username,
      email: user.email,
      password : hash,
      name : user.name,
      age : user.age,
      gender : user.gender,
      location : user.location,
      interests : user.interests,
      profile_picture : user.profile_picture,
    });
    // res.json(QueryResult)
    // res.send("Record saved successfuly");
  } catch (error) {
    res.send({
      message: "This is an",
      error,
    });
  }
};
