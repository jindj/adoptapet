const animals = [
  { id: 1, name: 'Milo', species: 'chat', age: 2, adopted: false },
  { id: 2, name: 'Rex', species: 'chien', age: 4, adopted: true },
  { id: 3, name: 'Nino', species: 'lapin', age: 1, adopted: false }
];

let nextId = 4;

function getAllAnimals() {
  return [...animals];
}

function getAnimalById(id) {
  return animals.find((animal) => animal.id === id) || null;
}

function createAnimal(animalData) {
  const newAnimal = {
    id: nextId,
    ...animalData
  };

  nextId += 1;
  animals.push(newAnimal);

  return newAnimal;
}

function updateAnimal(id, animalData) {
  const index = animals.findIndex((animal) => animal.id === id);

  if (index === -1) {
    return null;
  }

  animals[index] = {
    id,
    ...animalData
  };

  return animals[index];
}

function deleteAnimal(id) {
  const index = animals.findIndex((animal) => animal.id === id);

  if (index === -1) {
    return false;
  }

  animals.splice(index, 1);
  return true;
}

module.exports = {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal
};
