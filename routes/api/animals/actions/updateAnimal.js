const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');
const validateBody = require('../../../../middlewares/validateBody');

const router = express.Router();

router.put('/:id', validateIdParam, validateBody('update'), animalsController.updateAnimal);

module.exports = router;
