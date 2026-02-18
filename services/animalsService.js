const animalsStore = require('../store/animalsStore');
const ERROR_MESSAGES = require('../constants/errors');

function createNotFoundError() {
  const error = new Error(ERROR_MESSAGES.ANIMAL_NOT_FOUND);
  error.status = 404;
  return error;
}

function normalizeSpecies(species) {
  return species.trim().toLowerCase();
}

function getAnimals(species) {
  const animals = animalsStore.getAllAnimals();

  if (!species) {
    return animals;
  }

  const normalizedSpecies = normalizeSpecies(species);
  return animals.filter((animal) => normalizeSpecies(animal.species) === normalizedSpecies);
}

function getAdoptedAnimals() {
  return animalsStore.getAllAnimals().filter((animal) => animal.adopted);
}

function getAnimalById(id) {
  const animal = animalsStore.getAnimalById(id);

  if (!animal) {
    throw createNotFoundError();
  }

  return animal;
}

function createAnimal(data) {
  return animalsStore.createAnimal({
    name: data.name.trim(),
    species: data.species.trim(),
    age: data.age,
    adopted: false
  });
}

function updateAnimal(id, data) {
  const updatedAnimal = animalsStore.updateAnimal(id, {
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

function adoptAnimal(id) {
  const animal = animalsStore.getAnimalById(id);

  if (!animal) {
    throw createNotFoundError();
  }

  return animalsStore.updateAnimal(id, {
    name: animal.name,
    species: animal.species,
    age: animal.age,
    adopted: true
  });
}

function deleteAnimal(id) {
  const isDeleted = animalsStore.deleteAnimal(id);

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
