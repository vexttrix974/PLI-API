import { Request, Response } from "express";
import User from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// CREATE USER
export async function createUser(req: Request, res: Response) {
  try {
    const datas: User = req.body;
    const hash = await bcrypt.hash(datas.password, 10)

    const QueryResult = await prisma.user.create({
      data: {
        username: datas.username,
        email: datas.email,
        password: hash,
        name: datas.name,
        age: datas.age,
        gender: datas.gender,
        location: datas.location,
        interest: datas.interest,
        profile_picture: datas.profile_picture,
      },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("User not create");
    console.log(error);
  }
}

// UPDATE USER
export async function updateUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: User = req.body;
    const hash = await bcrypt.hash(datas.password, 10);

    await prisma.user.update({
      data: {
        username: datas.username,
        email: datas.email,
        password: hash,
        name: datas.name,
        age: datas.age,
        gender: datas.gender,
        location: datas.location,
        interest: datas.interest,
        profile_picture: datas.profile_picture,
      },
      where: { id },
    });
    const QueryResult = await prisma.user.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("User has not been updated");
  }
}

// DELETE USER
export async function deleteUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.user.delete({
      where: { id },
    });
    res.send("User delete");
  } catch (error) {
    res.send("User not delete");
  }
}
