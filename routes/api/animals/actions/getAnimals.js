const express = require('express');
const animalsController = require('../../../../controllers/animalsController');

const router = express.Router();

router.get('/', animalsController.getAnimals);

module.exports = router;
