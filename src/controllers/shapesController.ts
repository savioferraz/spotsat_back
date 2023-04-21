import httpStatus from "http-status";
import shapesService from "../services/shapesServices";
import { Request, Response } from "express";

export async function getAllShapes(req: Request, res: Response) {
  try {
    const shapes = await shapesService.getAllShapes();
    return res.status(200).send(shapes);
  } catch (error) {
    if (error.name === "unauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
