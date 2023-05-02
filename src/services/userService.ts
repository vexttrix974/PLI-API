import { Request, Response } from 'express';
import { Userinterface } from '../interfaces';
import { db } from '../database/admin';

const bcrypt = require('bcrypt');

/* This function creates a new user in the database */
export async function createUser(req: Request, res: Response) {
  const hash = req.body.password ?await bcrypt.hash(req.body.password, 10):"";
  const userData: Userinterface = {
    username: req.body.username,
    email: req.body.email,
    password: hash,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    interests: req.body.interests,
    profile_picture: req.body.profile_picture
  };
  try {
    const userRef = await db.collection("Users").add(userData);
    const userSnapshot = await userRef.get();
    const user = userSnapshot.data();
    res.json(user);
  } catch (error:any) {
    res.send({
      message:error.message,
      error,
    });
  }
}

/* This function updates a user's information in the database */
export async function updateUser(req: Request, res: Response) {
  const userId = req.params.id;
  const hash = req.body.password ?await bcrypt.hash(req.body.password, 10):"";
  const userData: Userinterface = {
    username: req.body.username,
    email: req.body.email,
    password: hash,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    interests: req.body.interests,
    profile_picture: req.body.profile_picture,
  };
  try {
    await db.collection("Users").doc(userId).update(userData);
    res.json({ message: "User updated successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
}

/* It deletes a user from the database based on the id passed in the request */
export async function deleteUser(req: Request, res: Response) {
  const userId = req.params.id;
  try {
    await db.collection("Users").doc(userId).delete();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete user", error });
  }
}