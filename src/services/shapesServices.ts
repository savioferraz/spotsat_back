import shapesRepository from "../repositories/shapeRepository";

async function postShape(userId: number, name: string, geodata: string) {
  await shapesRepository.createShape(userId, name, geodata);
}

async function getAllShapes(userId: number) {
  const shapes = await shapesRepository.findAllShapes(userId);

  return shapes;
}

async function getShape(id: number) {
  const shape = await shapesRepository.findShapeById(id);

  return shape;
}

async function putShape(id: number, name: string, geodata: string) {
  await shapesRepository.updateShape(id, name, geodata);
}

async function delShape(id: number) {
  await shapesRepository.deleteShape(id);
}

const shapesService = {
  postShape,
  getAllShapes,
  getShape,
  putShape,
  delShape,
};

export default shapesService;
