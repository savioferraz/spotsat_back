import { prisma } from "@/database/db";

async function findAllShapes() {
  return "ok";
}

const shapesRepository = { findAllShapes };

export default shapesRepository;
