const express = require('express');
const animalsController = require('../../../../controllers/animalsController');

const router = express.Router();

router.get('/adopted', animalsController.getAdoptedAnimals);

module.exports = router;
