import express, { Express } from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";
import { connectDb, disconnectDb } from "./database/db";

loadEnv();

const app = express();

app.use(cors()).use(express.json()).use();

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close() {
  await disconnectDb();
}

export default app;
