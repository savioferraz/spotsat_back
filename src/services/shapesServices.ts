import shapesRepository from "../repositories/shapeRepository";

async function getAllShapes() {
  const shapes = await shapesRepository.findAllShapes();

  return shapes;
}

const shapesService = {
  getAllShapes,
};

export default shapesService;
