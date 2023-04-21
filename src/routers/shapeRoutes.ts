import { authMiddleware } from "../middlewares/authMiddleware";
import * as shapesController from "../controllers/shapesController";
import { Router } from "express";

const shapeRoutes = Router();

shapeRoutes.get("/", authMiddleware, shapesController.getAllShapes);

export default shapeRoutes;
