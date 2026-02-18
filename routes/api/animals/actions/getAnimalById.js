const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');

const router = express.Router();

/**
 * @openapi
 * /api/animals/{id}:
 *   get:
 *     tags:
 *       - Animals
 *     summary: Get animal by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Animal found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       400:
 *         description: Invalid id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Animal not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/:id', validateIdParam, animalsController.getAnimalById);

module.exports = router;
