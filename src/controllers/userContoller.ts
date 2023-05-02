// import { Userinterface } from "../interfaces";
import * as dotenv from 'dotenv';
import { Request, Response } from "express";
import { db } from "../database/admin";
import { createUser, updateUser, deleteUser } from "../services/userService";

dotenv.config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* It gets all users */
export async function getAll(req: Request, res: Response) {
  const QueryResult = await db.collection("Users").get();
  const users: any[] = [];

  QueryResult.forEach((doc: { data: () => any, ref: any }) => {
    const user = doc.data()
    user.id = doc.ref.id;
    users.push(user);
  });
  res.json(users);
}

/* It gets a user by its id */
export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const QueryResult = await db.collection("Users").doc(id).get();
  if (!QueryResult.exists) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(QueryResult.data());
}

/* The function create new user */
export async function register(req: Request, res: Response) {
  try {
    await createUser(req, res);
  } catch (error: any) {
    res.send({
      message: error.message,
      error,
    });
  }
}

/* The function updates new user */
export async function updateById(req: Request, res: Response) {
  try {
    await updateUser(req, res);
  } catch (error: any) {
    res.send({
      message: error.message,
      error,
    });
  }
}

/* The function deletes a user by its id */
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteUser(req, res);
  } catch (error: any) {
    res.send({
      message: error.message,
      error,
    });
  }
}

/*
 * The function returns a json object with an access token if
 * the user is found in the database, and an error message if the user is not found
 */

export async function loginUser(req: Request, res: Response) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const userQuery = await db
      .collection("Users")
      .where("username", "==", username)
      .get();
    if (userQuery.empty) {
      res.status(401).json({ message: "Invalid username or password" });
    } else {
      const userDoc = userQuery.docs[0];
      const userData = userDoc.data();
      const passwordMatch = await bcrypt.compare(password, userData.password);
      if (passwordMatch) {
        const acces = jwt.sign(
          {
            email: username,
            password: password,
          },
          process.env.JWT_SIGN_SECRET,
          {
            expiresIn: "24h",
          }
        );
        res.json({ accesToken: acces });

        res.json({ message: "Login successful", user: userData });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Unable to login", error });
  }
}
