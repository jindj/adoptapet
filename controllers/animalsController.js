const animalsService = require('../services/animalsService');

async function getAnimals(req, res, next) {
  try {
    const animals = await animalsService.getAnimals(req.query.species);
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
}

async function getAdoptedAnimals(req, res, next) {
  try {
    const animals = await animalsService.getAdoptedAnimals();
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
}

async function getAnimalById(req, res, next) {
  try {
    const animal = await animalsService.getAnimalById(req.animalId);
    res.status(200).json(animal);
  } catch (error) {
    next(error);
  }
}

async function createAnimal(req, res, next) {
  try {
    const createdAnimal = await animalsService.createAnimal(req.body);
    res.status(201).json(createdAnimal);
  } catch (error) {
    next(error);
  }
}

async function updateAnimal(req, res, next) {
  try {
    const updatedAnimal = await animalsService.updateAnimal(req.animalId, req.body);
    res.status(200).json(updatedAnimal);
  } catch (error) {
    next(error);
  }
}

async function adoptAnimal(req, res, next) {
  try {
    const adoptedAnimal = await animalsService.adoptAnimal(req.animalId);
    res.status(200).json(adoptedAnimal);
  } catch (error) {
    next(error);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await animalsService.deleteAnimal(req.animalId);
    res.status(204).send();
  } catch (error) {
    next(error);
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
