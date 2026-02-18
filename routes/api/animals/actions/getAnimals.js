const express = require('express');
const animalsController = require('../../../../controllers/animalsController');

const router = express.Router();

/**
 * @openapi
 * /api/animals:
 *   get:
 *     tags:
 *       - Animals
 *     summary: List animals
 *     description: Returns all animals, with optional filtering by species.
 *     parameters:
 *       - in: query
 *         name: species
 *         required: false
 *         schema:
 *           type: string
 *         description: Case-insensitive species filter.
 *         example: chien
 *     responses:
 *       200:
 *         description: Animals list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get('/', animalsController.getAnimals);

module.exports = router;
