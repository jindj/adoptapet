const ERROR_MESSAGES = require('../constants/errors');

function validateIdParam(req, res, next) {
  const parsedId = Number.parseInt(req.params.id, 10);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    return res.status(400).json({ error: ERROR_MESSAGES.INVALID_ID });
  }

  req.animalId = parsedId;
  return next();
}

module.exports = validateIdParam;
