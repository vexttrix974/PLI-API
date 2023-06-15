import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { createUser, deleteUser, updateUser } from '../services/Users.services';

const jwt = require('jsonwebtoken');
/**
 *  getAll
*/

export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const user = await prisma.user.findMany();
  res.send(JSON.stringify(user, null, 2));
}
/**
 *  getById
*/
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const  id  = parseInt(req.params.id);
  const user = await prisma.user.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(user, null, 2));
}
/**
 *  create the new users
*/
export async function register(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createUser(req, res);
  } catch (error) {
    res.send('User not create');
    console.log(error);
  }
}

/**
 *  update the users
*/
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateUser(req, res);
  } catch (error) {
    res.send('User has been updated');
  }
}

/**
 *  delete the users
*/
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteUser(req, res);
  } catch (error) {
    res.send('User not delete');
    console.log(error)
  }
}
export async function login(req: Request, res:{
  json(arg0: { accessToken: any; }): unknown; send: (arg0: string) => Response;
}) {
  const request = {
    email: req.body.email,
    password: req.body.password,
  };
  const find = await prisma.user.findUnique({
    where: { email: request.email },
  });
  if(find && request.password===find.password){

    const accessToken = jwt.sign({ email: request.email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1days' });
    res.json({
      accessToken,
    });
  }
   else {
    res.send('Username or password incorrect');
  }
}

