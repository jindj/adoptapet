const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateBody = require('../../../../middlewares/validateBody');

const router = express.Router();

/**
 * @openapi
 * /api/animals:
 *   post:
 *     tags:
 *       - Animals
 *     summary: Create a new animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAnimalInput'
 *     responses:
 *       201:
 *         description: Animal created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       400:
 *         description: Invalid body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', validateBody('create'), animalsController.createAnimal);

module.exports = router;
