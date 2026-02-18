function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  const status = error.status || 500;
  return res.status(status).json({ error: error.message });
}

module.exports = errorHandler;
