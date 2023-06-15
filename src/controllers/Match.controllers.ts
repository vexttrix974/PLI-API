import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { createMatch, updateMatch, deleteMatch } from '../services/Match.services';


/**
 *  getAll
*/

export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const match = await prisma.Match.findMany();
  res.send(JSON.stringify(match, null, 2));
}
/**
 *  getById
*/
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const  id  = parseInt(req.params.id);
  const match = await prisma.match.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(match, null, 2));
}
/**
 *  create the new Match
*/
export async function create(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createMatch(req, res);
  } catch (error) {
    res.send('Match not create');
    console.log(error);
  }
}

/**
 *  update the Match
*/
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateMatch(req, res);
  } catch (error) {
    res.send('Match has been updated');
  }
}

/**
 *  delete the Match
*/
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteMatch(req, res);
  } catch (error) {
    res.send('Match not delete');
    console.log(error)
  }
}


