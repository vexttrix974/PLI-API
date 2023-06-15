
import { Request, Response } from 'express';
import User from '../Interface';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
/**
 *  create the users
*/
export async function createUser(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {

    const userData: User  = req.body;

    const user = await prisma.user.create({
      data: userData,
    });
    res.send(JSON.stringify(user, null, 2));
  } catch (error) {
    res.send('User not create');
    console.log(error);
  }
}
/**
 *  update the users
*/
export async function updateUser(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.user.update({
        data:req.body,
        where: { id },
      },
    );
     const newuser = await prisma.user.findUnique({ where: { id }});
    res.send(JSON.stringify(newuser, null, 2));
  } catch (error) {
    res.send('User has not been updated');
  }
}

/**
 *  delete the users
*/
export async function deleteUser(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.user.delete({
      where: { id },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('User not delete');
  }
}
