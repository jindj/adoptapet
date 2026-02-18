const animalsService = require('../services/animalsService');

function getAnimals(req, res, next) {
  try {
    const animals = animalsService.getAnimals(req.query.species);
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
}

function getAdoptedAnimals(req, res, next) {
  try {
    const animals = animalsService.getAdoptedAnimals();
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
}

function getAnimalById(req, res, next) {
  try {
    const animal = animalsService.getAnimalById(req.animalId);
    res.status(200).json(animal);
  } catch (error) {
    next(error);
  }
}

function createAnimal(req, res, next) {
  try {
    const createdAnimal = animalsService.createAnimal(req.body);
    res.status(201).json(createdAnimal);
  } catch (error) {
    next(error);
  }
}

function updateAnimal(req, res, next) {
  try {
    const updatedAnimal = animalsService.updateAnimal(req.animalId, req.body);
    res.status(200).json(updatedAnimal);
  } catch (error) {
    next(error);
  }
}

function adoptAnimal(req, res, next) {
  try {
    const adoptedAnimal = animalsService.adoptAnimal(req.animalId);
    res.status(200).json(adoptedAnimal);
  } catch (error) {
    next(error);
  }
}

function deleteAnimal(req, res, next) {
  try {
    animalsService.deleteAnimal(req.animalId);
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
