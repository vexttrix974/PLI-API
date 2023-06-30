import { Request, Response } from "express";
import { Interest } from "../Interface";
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma
}