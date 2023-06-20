import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { createAnnounces, updateAnnounces, deleteAnnounces } from '../services/Annonces.services';


/**
 *  getAll
*/

export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const announces = await prisma.annonces.findMany();
  res.send(JSON.stringify(announces, null, 2));
}
/**
 *  getById
*/
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const  id  = parseInt(req.params.id);
  const announces = await prisma.annonces.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(announces, null, 2));
}
/**
 *  create the new announces
*/
export async function create(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createAnnounces(req, res);
  } catch (error) {
    res.send('Announces not create');
    console.log(error);
  }
}

/**
 *  update the announces
*/
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateAnnounces(req, res);
  } catch (error) {
    res.send('Announces has been updated');
  }
}

/**
 *  delete the announces
*/
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteAnnounces(req, res);
  } catch (error) {
    res.send('Announces not delete');
    console.log(error)
  }
}


