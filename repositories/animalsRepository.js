const { Op } = require('sequelize');
const Animal = require('../models/Animal');

function normalizeSpecies(species) {
  return species.trim().toLowerCase();
}

async function findAll(species) {
  if (!species) {
    return Animal.findAll({ order: [['id', 'ASC']] });
  }

  const normalizedSpecies = normalizeSpecies(species);

  return Animal.findAll({
    where: {
      species: {
        [Op.iLike]: normalizedSpecies
      }
    },
    order: [['id', 'ASC']]
  });
}

async function findAdopted() {
  return Animal.findAll({
    where: { adopted: true },
    order: [['id', 'ASC']]
  });
}

async function findById(id) {
  return Animal.findByPk(id);
}

async function create(data) {
  return Animal.create(data);
}

async function updateById(id, data) {
  const animal = await findById(id);

  if (!animal) {
    return null;
  }

  return animal.update(data);
}

async function deleteById(id) {
  const deletedCount = await Animal.destroy({ where: { id } });
  return deletedCount > 0;
}

module.exports = {
  findAll,
  findAdopted,
  findById,
  create,
  updateById,
  deleteById
};
