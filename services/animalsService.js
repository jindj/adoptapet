const animalsRepository = require('../repositories/animalsRepository');
const ERROR_MESSAGES = require('../constants/errors');

function createNotFoundError() {
  const error = new Error(ERROR_MESSAGES.ANIMAL_NOT_FOUND);
  error.status = 404;
  return error;
}

async function getAnimals(species) {
  return animalsRepository.findAll(species);
}

async function getAdoptedAnimals() {
  return animalsRepository.findAdopted();
}

async function getAnimalById(id) {
  const animal = await animalsRepository.findById(id);

  if (!animal) {
    throw createNotFoundError();
  }

  return animal;
}

async function createAnimal(data) {
  return animalsRepository.create({
    name: data.name.trim(),
    species: data.species.trim(),
    age: data.age,
    adopted: false
  });
}

async function updateAnimal(id, data) {
  const updatedAnimal = await animalsRepository.updateById(id, {
    name: data.name.trim(),
    species: data.species.trim(),
    age: data.age,
    adopted: data.adopted
  });

  if (!updatedAnimal) {
    throw createNotFoundError();
  }

  return updatedAnimal;
}

async function adoptAnimal(id) {
  const animal = await animalsRepository.findById(id);

  if (!animal) {
    throw createNotFoundError();
  }

  return animalsRepository.updateById(id, {
    name: animal.name,
    species: animal.species,
    age: animal.age,
    adopted: true
  });
}

async function deleteAnimal(id) {
  const isDeleted = await animalsRepository.deleteById(id);

  if (!isDeleted) {
    throw createNotFoundError();
  }
}

module.exports = {
  getAnimals,
  getAdoptedAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  adoptAnimal,
  deleteAnimal
};
