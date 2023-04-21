import userService from "../services/userServices";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response) {
  console.log("caiu aqui");

  try {
    const { name, email, password } = req.body;

    const user = await userService.createUser(name, email, password);

    return res.status(httpStatus.CREATED).json({ user });
  } catch (error) {
    if (error.name === "invalidDataError") {
      return res.status(httpStatus.NOT_ACCEPTABLE).send(error);
    }
    if (error.name === "sameEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const session = await userService.loginService(email, password);

    return res.status(httpStatus.OK).json({ session });
  } catch (error) {
    if (error.name === "invalidLoginError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
