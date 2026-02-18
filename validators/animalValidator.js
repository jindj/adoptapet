function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidAge(value) {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

function validateCreateAnimalBody(body) {
  if (!body || typeof body !== 'object') {
    return false;
  }

  return isNonEmptyString(body.name)
    && isNonEmptyString(body.species)
    && isValidAge(body.age);
}

function validateUpdateAnimalBody(body) {
  if (!body || typeof body !== 'object') {
    return false;
  }

  return isNonEmptyString(body.name)
    && isNonEmptyString(body.species)
    && isValidAge(body.age)
    && typeof body.adopted === 'boolean';
}

module.exports = {
  validateCreateAnimalBody,
  validateUpdateAnimalBody
};
