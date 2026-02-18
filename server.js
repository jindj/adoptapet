const express = require('express');
const animalsRouter = require('./routes/api/animals');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/animals', animalsRouter);

try {
  const swaggerUi = require('swagger-ui-express');
  const openapiSpecification = require('./docs/openapi');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
} catch (error) {
  console.warn('Swagger is not available yet. Run npm install to enable /api-docs.');
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  // Message minimal utile uniquement au démarrage.
  console.log(`API running on port ${PORT}`);
});
