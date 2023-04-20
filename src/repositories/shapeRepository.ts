import { prisma } from "../database/db";

async function findAllShapes() {
  const polygons = prisma.polygons.findMany();
  return polygons;
}

const shapesRepository = { findAllShapes };

export default shapesRepository;
