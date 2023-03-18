import { Request, Response } from 'express';

import db from '../database/instance';
import User from '../database/models/User';

const firestore = db.firestore()
