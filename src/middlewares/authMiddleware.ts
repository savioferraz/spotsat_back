import { unauthorizedError } from "../errors/errors";
import { NextFunction, Request, Response } from "express";
// eslint-disable-next-line boundaries/element-types
import authRepository from "../repositories/authRepository";
import { tokenSchema } from "../schemas/authSchema";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    res.sendStatus(401);
    throw unauthorizedError();
  }

  const token = req.headers.authorization?.replace("Bearer ", "");

  const validation = tokenSchema.validate({ token }, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send({ message: errors });
    throw unauthorizedError();
  }

  const checkToken = await authRepository.findSessionByToken(token);

  if (!checkToken) {
    res.sendStatus(401);
    throw unauthorizedError();
  }

  next();
}

export { authMiddleware };
