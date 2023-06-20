
import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import IMessage from '../Interface';
/**
 *  create the message
*/
export async function createMessage(req: Request, res: Response) {
    try {
      const MessageData:IMessage= req.body;
  
      const message = await prisma.message.create({
        data: 
        MessageData
      });
  
      res.json(message)
    } catch (error) {
      res.status(500).send('Failed to create message');
      console.log(error);
    }
  }

/**
 *  update the message
*/
export async function updateMessage(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.message.update({
        data:req.body,
        where: { id },
      },
    );
     const newmessage = await prisma.message.findUnique({ where: { id }});
    res.send(JSON.stringify(newmessage, null, 2));
  } catch (error) {
    res.send('Message has not been updated');
  }
}

/**
 *  delete the message
*/
export async function deleteMessage(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const  id  = parseInt(req.params.id);
    await prisma.message.delete({
      where: { id },
    });
    res.send('Message delete');
  } catch (error) {
    res.send('Message  not delete');
  }
}
