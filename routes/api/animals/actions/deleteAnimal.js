const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');

const router = express.Router();

router.delete('/:id', validateIdParam, animalsController.deleteAnimal);

module.exports = router;
