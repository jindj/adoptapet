const express = require('express');
const animalsRouter = require('./routes/api/animals');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/animals', animalsRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  // Message minimal utile uniquement au démarrage.
  console.log(`API running on port ${PORT}`);
});
