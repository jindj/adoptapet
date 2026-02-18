const Animal = require('../models/Animal');

const INITIAL_ANIMALS = [
  { name: 'Milo', species: 'chat', age: 2, adopted: false },
  { name: 'Rex', species: 'chien', age: 4, adopted: true },
  { name: 'Nino', species: 'lapin', age: 1, adopted: false }
];

async function seedAnimalsIfEmpty() {
  const existingAnimals = await Animal.count();

  if (existingAnimals > 0) {
    return;
  }

  await Animal.bulkCreate(INITIAL_ANIMALS);
}

module.exports = seedAnimalsIfEmpty;
