const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateBody = require('../../../../middlewares/validateBody');

const router = express.Router();

router.post('/', validateBody('create'), animalsController.createAnimal);

module.exports = router;
