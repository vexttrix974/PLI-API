
import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
import { Match } from '@prisma/client';
const prisma = new PrismaClient();
/**
 *  create the Match
*/
export async function createMatch(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {

    const MatchData: Match   = req.body;

    const match = await prisma.match.create({
      data: MatchData,
    });
    res.send(JSON.stringify(match, null, 2));
  } catch (error) {
    res.send('Match not create');
    console.log(error);
  }
}
/**
 *  update the Match
*/
export async function updateMatch(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.match.update({
        data:req.body,
        where: { id },
      },
    );
     const newmatch = await prisma.match.findUnique({ where: { id }});
    res.send(JSON.stringify(newmatch, null, 2));
  } catch (error) {
    res.send('Match has not been updated');
  }
}

/**
 *  delete the Match
*/
export async function deleteMatch(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.match.delete({
      where: { id },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('Match  not delete');
  }
}
