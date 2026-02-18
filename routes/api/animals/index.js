const express = require('express');
const getAnimalsRoute = require('./actions/getAnimals');
const getAdoptedAnimalsRoute = require('./actions/getAdoptedAnimals');
const getAnimalByIdRoute = require('./actions/getAnimalById');
const createAnimalRoute = require('./actions/createAnimal');
const updateAnimalRoute = require('./actions/updateAnimal');
const adoptAnimalRoute = require('./actions/adoptAnimal');
const deleteAnimalRoute = require('./actions/deleteAnimal');

const router = express.Router();

router.use(getAnimalsRoute);
router.use(getAdoptedAnimalsRoute);
router.use(getAnimalByIdRoute);
router.use(createAnimalRoute);
router.use(updateAnimalRoute);
router.use(adoptAnimalRoute);
router.use(deleteAnimalRoute);

module.exports = router;
