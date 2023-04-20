import { prisma } from "@/database/db";

async function findAllShapes() {
  return "ok";
}

const userRepository = { findAllShapes };

export default userRepository;
