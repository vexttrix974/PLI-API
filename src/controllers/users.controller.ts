import { Request, Response } from 'express';
import db from '../database/instance';
import User from '../database/models/User';

let { getFirestore, collection, getDocs ,addDoc} = require('firebase/firestore/lite') ;


const firestore = getFirestore(db)

export const createUser = async (req: Request, res: Response ) => {
  try {
    const data = req.body;
    await firestore.collection('User').doc().set(data);
    res.send('Record saved successfuly');
  } catch (error) {
    res.send({
      message: 'This is an',
      error,
    });
  }
}