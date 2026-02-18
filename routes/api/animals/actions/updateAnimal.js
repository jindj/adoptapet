const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');
const validateBody = require('../../../../middlewares/validateBody');

const router = express.Router();

/**
 * @openapi
 * /api/animals/{id}:
 *   put:
 *     tags:
 *       - Animals
 *     summary: Replace an animal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAnimalInput'
 *     responses:
 *       200:
 *         description: Animal updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       400:
 *         description: Invalid id or invalid body
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
router.put('/:id', validateIdParam, validateBody('update'), animalsController.updateAnimal);

module.exports = router;
