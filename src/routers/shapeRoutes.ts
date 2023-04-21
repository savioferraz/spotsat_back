import { authMiddleware } from "../middlewares/authMiddleware";
import * as shapesController from "../controllers/shapesController";
import { Router } from "express";

const shapeRoutes = Router();

shapeRoutes
  .post("/", authMiddleware, shapesController.postShape)
  .get("/", authMiddleware, shapesController.getAllShapes)
  .get("/:id", authMiddleware, shapesController.getShapeById)
  .put("/:id", authMiddleware, shapesController.updateShape)
  .delete("/:id", authMiddleware, shapesController.deleteShape);

export default shapeRoutes;
