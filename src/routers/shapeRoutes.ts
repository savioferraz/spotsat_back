import { getAllShapes } from "../controllers/shapesController";
import { Router } from "express";

const shapeRoutes = Router();

shapeRoutes.get("/", getAllShapes);

export default shapeRoutes;
