import httpStatus from "http-status";
import shapesService from "../services/shapesServices";
import { Request, Response } from "express";

export async function postShape(req: Request, res: Response) {
  try {
    const userId = Number(req.headers.userid);
    const { name, geodata } = req.body;

    await shapesService.postShape(userId, name, geodata);

    return res.status(200).send("Polígono criado");
  } catch (error) {
    if (error.name === "unauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getAllShapes(req: Request, res: Response) {
  try {
    const userId = Number(req.headers.userid);

    const shapes = await shapesService.getAllShapes(userId);
    return res.status(200).send(shapes);
  } catch (error) {
    if (error.name === "unauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getShapeById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const shape = await shapesService.getShape(id);
    return res.status(200).send(shape);
  } catch (error) {
    if (error.name === "unauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    if (error.name === "notFoundError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function deleteShape(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const shape = await shapesService.delShape(id);
    return res.status(200).send(shape);
  } catch (error) {
    if (error.name === "unauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    if (error.name === "notFoundError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function updateShape(req: Request, res: Response) {
  try {
    const { name, geodata } = req.body;
    const id = Number(req.params.id);
    const shape = await shapesService.putShape(id, name, geodata);
    return res.status(200).send(shape);
  } catch (error) {
    if (error.name === "unauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    if (error.name === "notFoundError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
