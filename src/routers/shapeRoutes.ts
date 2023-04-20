import { getAllShapes } from "../controllers";
import { Router } from "express";

const shapeRoutes = Router();

shapeRoutes.get("/", getAllShapes);

export { shapeRoutes };
