const express = require('express');
const animalsController = require('../../../../controllers/animalsController');

const router = express.Router();

/**
 * @openapi
 * /api/animals/adopted:
 *   get:
 *     tags:
 *       - Animals
 *     summary: List adopted animals
 *     responses:
 *       200:
 *         description: Adopted animals list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get('/adopted', animalsController.getAdoptedAnimals);

module.exports = router;
