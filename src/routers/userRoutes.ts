import * as userController from "../controllers/userController";
import { createAccountValidation, loginValidation } from "../middlewares/userMiddleware";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/create", createAccountValidation, userController.createUser);
userRoutes.post("/login", loginValidation, userController.login);

export default userRoutes;
