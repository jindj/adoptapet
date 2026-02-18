const ERROR_MESSAGES = require('../constants/errors');
const {
  validateCreateAnimalBody,
  validateUpdateAnimalBody
} = require('../validators/animalValidator');

function validateBody(validationType) {
  return function bodyValidator(req, res, next) {
    const isValid = validationType === 'create'
      ? validateCreateAnimalBody(req.body)
      : validateUpdateAnimalBody(req.body);

    if (!isValid) {
      return res.status(400).json({ error: ERROR_MESSAGES.INVALID_BODY });
    }

    return next();
  };
}

module.exports = validateBody;
