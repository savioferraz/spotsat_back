import { invalidDataError } from "../errors/errors";
import { loginSchema, createAccountSchema } from "../schemas/userSchemas";
import { NextFunction, Request, Response } from "express";

async function createAccountValidation(req: Request, res: Response, next: NextFunction) {
  const validation = createAccountSchema.validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send({ message: errors });
    throw invalidDataError();
  }

  res.locals.body = req.body;
  next();
}

async function loginValidation(req: Request, res: Response, next: NextFunction) {
  const validation = loginSchema.validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send({ message: errors });
    throw invalidDataError();
  }

  res.locals.body = req.body;
  next();
}

export { createAccountValidation, loginValidation };
