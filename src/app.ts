import express, { Express } from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";
import { connectDb, disconnectDb } from "./database/db";
import shapeRoutes from "./routers/shapeRoutes";
import userRoutes from "./routers/userRoutes";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.status(200).send("OK!"))
  .use("/users", userRoutes)
  .use("/shapes", shapeRoutes);

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close() {
  await disconnectDb();
}

export default app;
