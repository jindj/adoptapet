const express = require('express');
const animalsController = require('../../../../controllers/animalsController');
const validateIdParam = require('../../../../middlewares/validateIdParam');

const router = express.Router();

/**
 * @openapi
 * /api/animals/{id}:
 *   delete:
 *     tags:
 *       - Animals
 *     summary: Delete an animal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       204:
 *         description: Animal deleted
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
router.delete('/:id', validateIdParam, animalsController.deleteAnimal);

module.exports = router;
