const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');

const router = express.Router();

router.get('/:id', validateIdParam, animalsController.getAnimalById);

module.exports = router;
