import { Request, Response } from 'express';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { createMessage, updateMessage, deleteMessage } from '../services/Message.services';


/**
 *  getAll
*/

export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const messages = await prisma.message.findMany({
    include:{match :true,
        sender:true,
        receiver:true,
    },
  });
  res.send(JSON.stringify(messages, null, 2));
}
/**
 *  getById
*/
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const  id  = parseInt(req.params.id);
  const match = await prisma.message.findUnique({
    where: { id },
    
      include:{match :true,
        sender:true,
        receiver:true,
    },
    
  });
  res.send(JSON.stringify(match, null, 2));
}
/**
 *  create the new Message
*/
export async function create(req: Request, res: Response) {
    try {
      await createMessage(req, res);
    } catch (error) {
      res.send('Message not created');
      console.log(error);
    }
  }

/**
 *  update the Message
*/
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateMessage(req, res);
  } catch (error) {
    res.send('Message has been updated');
  }
}

/**
 *  delete the Message
*/
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteMessage(req, res);
  } catch (error) {
    res.send('Message not delete');
    console.log(error)
  }
}


