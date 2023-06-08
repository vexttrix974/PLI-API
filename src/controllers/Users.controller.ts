import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { createUser, deleteUser, updateUser } from '../services/Users.services';

const jwt = require('jsonwebtoken');
// getAll

export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const user = await prisma.user.findMany();
  res.send(JSON.stringify(user, null, 2));
}
// getbyId
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const { id } = req.query;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(user, null, 2));
}
// create
export async function register(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createUser(req, res);
  } catch (error) {
    res.send('User not create');
    console.log(error);
  }
}

// updateById
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateUser(req, res);
  } catch (error) {
    res.send('User has been updated');
  }
}

// delete
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteUser(req, res);
  } catch (error) {
    res.send('User not delete');
    console.log(error)
  }
}

