const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');

const router = express.Router();

router.patch('/:id/adopt', validateIdParam, animalsController.adoptAnimal);

module.exports = router;
