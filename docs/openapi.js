const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'AdoptAPet API',
      version: '1.0.0',
      description: "Documentation generee depuis les commentaires JSDoc des routes."
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development server'
      }
    ],
    tags: [
      {
        name: 'Animals',
        description: 'Gestion des animaux du refuge'
      }
    ],
    components: {
      schemas: {
        Animal: {
          type: 'object',
          required: ['id', 'name', 'species', 'age', 'adopted'],
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Milo' },
            species: { type: 'string', example: 'chat' },
            age: { type: 'number', example: 2 },
            adopted: { type: 'boolean', example: false }
          }
        },
        CreateAnimalInput: {
          type: 'object',
          required: ['name', 'species', 'age'],
          properties: {
            name: { type: 'string', example: 'Luna' },
            species: { type: 'string', example: 'chien' },
            age: { type: 'number', example: 3 }
          }
        },
        UpdateAnimalInput: {
          type: 'object',
          required: ['name', 'species', 'age', 'adopted'],
          properties: {
            name: { type: 'string', example: 'Luna' },
            species: { type: 'string', example: 'chien' },
            age: { type: 'number', example: 4 },
            adopted: { type: 'boolean', example: true }
          }
        },
        ErrorResponse: {
          type: 'object',
          required: ['error'],
          properties: {
            error: { type: 'string', example: 'Invalid id' }
          }
        }
      }
    }
  },
  apis: ['./routes/api/animals/actions/*.js']
};

const openapiSpecification = swaggerJSDoc(options);

module.exports = openapiSpecification;
