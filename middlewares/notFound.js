const ERROR_MESSAGES = require('../constants/errors');

function notFound(req, res) {
  res.status(404).json({ error: ERROR_MESSAGES.ROUTE_NOT_FOUND });
}

module.exports = notFound;
