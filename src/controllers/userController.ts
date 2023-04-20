import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
  try {
    return res.status(200).send("ok");
  } catch (error) {
    return res.status(400).send({});
  }
}
