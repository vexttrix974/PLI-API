
import { Request, Response } from 'express';
import { Annonces } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
/**
 *  create the users
*/
export async function createAnnounces(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {

    const AnnoncesData: Annonces = req.body;

    const annonces = await prisma.annonces.create({
      data: AnnoncesData,
    });
    res.send(JSON.stringify(annonces, null, 2));
  } catch (error) {
    res.send('Announces not create');
    console.log(error);
  }
}
/**
 *  update the users
*/
export async function updateAnnounces(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.annonces.update({
        data:req.body,
        where: { id },
      },
    );
     const newannounces = await prisma.annonces.findUnique({ where: { id }});
    res.send(JSON.stringify(newannounces, null, 2));
  } catch (error) {
    res.send('Announces has not been updated');
  }
}

/**
 *  delete the users
*/
export async function deleteAnnounces(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.annonces.delete({
      where: { id },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('Announces  not delete');
  }
}
