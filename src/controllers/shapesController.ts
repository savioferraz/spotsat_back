import shapesService from "../services/shapesServices";
import { Request, Response } from "express";

export async function getAllShapes(req: Request, res: Response) {
  try {
    const shapes = await shapesService.getAllShapes();
    return res.status(200).send(shapes);
  } catch (error) {
    return res.status(400).send({});
  }
}
