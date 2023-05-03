import e, { Request, Response } from "express";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Userinterface } from "../interfaces";
import { db } from "../database/admin";
import { auth } from "../database/firebase";

const bcrypt = require("bcrypt");

/* This function creates a new user in the database */
export async function createUser(req: Request, res: Response) {
  const userData: Userinterface = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    interests: req.body.interests,
    profile_picture: req.body.profile_picture,
  };

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const hash = await bcrypt.hash(req.body.password, 10);
    const userRef = await db.collection("Users").doc(user.uid).set({
      username: userData.username,
      email: userData.email,
      password: hash,
      name: userData.name,
      age: userData.age,
      gender: userData.gender,
      location: userData.location,
      interests: userData.interests,
      profile_picture: userData.profile_picture,
    });
    const userSnapshot = await userRef.get();
    const usert = userSnapshot.data();
    res.json(usert);
  } catch (error: any) {
    res.send({
      message: error.message,
    });
  }
}

/* This function updates a user's information in the database */
export async function updateUser(req: Request, res: Response) {
  const userId = req.params.id;
  const hash = await bcrypt.hash(req.body.password, 10);
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
  } catch (error) {
    res.status(500).json({ message: "Unable to update user", error });
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
