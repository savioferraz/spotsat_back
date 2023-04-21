import { prisma } from "../database/db";

async function findAllShapes(userId: number) {
  const result = await prisma.polygons.findMany({ where: { userId }, orderBy: { id: "desc" } });
  return result;
}

async function findShapeById(id: number) {
  const result = await prisma.polygons.findFirst({ where: { id } });
  return result;
}

async function createShape(userId: number, name: string, geodata: string) {
  return await prisma.polygons.create({
    data: {
      userId,
      name,
      geodata,
    },
  });
}

async function updateShape(id: number, name: string, geodata: string) {
  return await prisma.polygons.update({ where: { id }, data: { name, geodata } });
}

async function deleteShape(id: number) {
  return await prisma.polygons.delete({ where: { id } });
}

const shapesRepository = { findAllShapes, findShapeById, createShape, updateShape, deleteShape };

export default shapesRepository;
