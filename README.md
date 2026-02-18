# AdoptAPet API

API REST Node.js + Express pour gérer un refuge animaux, construite avec une architecture modulaire et des responsabilités séparées (clean code).

## Stack

- Node.js
- Express
- swagger-jsdoc
- swagger-ui-express
- CommonJS
- Données en mémoire (aucune base de données)

## Lancement

```bash
npm install
npm run dev
```

Ou en mode production :

```bash
npm start
```

Serveur : `http://localhost:3000` (ou `PORT` via variable d'environnement)

Préfixe API : `/api`

Documentation Swagger UI : `http://localhost:3000/api-docs`

## Structure du projet

```text
.
├── server.js
├── package.json
├── nodemon.json
├── routes
│   └── api
│       └── animals
│           ├── index.js
│           └── actions
│               ├── getAnimals.js
│               ├── getAdoptedAnimals.js
│               ├── getAnimalById.js
│               ├── createAnimal.js
│               ├── updateAnimal.js
│               ├── adoptAnimal.js
│               └── deleteAnimal.js
├── controllers
│   └── animalsController.js
├── services
│   └── animalsService.js
├── store
│   └── animalsStore.js
├── validators
│   └── animalValidator.js
├── middlewares
│   ├── validateIdParam.js
│   ├── validateBody.js
│   ├── notFound.js
│   └── errorHandler.js
└── constants
    └── errors.js
```

## Modèle Animal

```json
{
  "id": 1,
  "name": "Milo",
  "species": "chat",
  "age": 2,
  "adopted": false
}
```

Contraintes :
- `id` : entier auto-incrémenté
- `name` : string non vide
- `species` : string non vide
- `age` : number >= 0
- `adopted` : boolean

## Données initiales

- 1 chat non adopté
- 1 chien adopté
- 1 lapin non adopté

## Endpoints

### 1) GET `/api/animals`
Retourne tous les animaux.

Filtre optionnel : `?species=chien` (insensible à la casse).

Exemple :

```bash
curl http://localhost:3000/api/animals
curl "http://localhost:3000/api/animals?species=ChIeN"
```

### 2) GET `/api/animals/:id`
Retourne un animal par id.

```bash
curl http://localhost:3000/api/animals/1
```

### 3) POST `/api/animals`
Crée un animal (`adopted` est forcé à `false`).

Body requis : `name`, `species`, `age`.

```bash
curl -X POST http://localhost:3000/api/animals \
  -H "Content-Type: application/json" \
  -d '{"name":"Luna","species":"chat","age":3}'
```

### 4) PUT `/api/animals/:id`
Remplacement complet : `name`, `species`, `age`, `adopted` requis.

```bash
curl -X PUT http://localhost:3000/api/animals/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Luna","species":"chat","age":4,"adopted":true}'
```

### 5) PATCH `/api/animals/:id/adopt`
Passe `adopted` à `true`.

```bash
curl -X PATCH http://localhost:3000/api/animals/3/adopt
```

### 6) DELETE `/api/animals/:id`
Supprime un animal et retourne `204` sans body.

```bash
curl -i -X DELETE http://localhost:3000/api/animals/2
```

### 7) GET `/api/animals/adopted`
Retourne uniquement les animaux adoptés.

```bash
curl http://localhost:3000/api/animals/adopted
```

## Validation et erreurs

Format d'erreur uniforme :

```json
{ "error": "MESSAGE" }
```

Cas gérés :
- `400` `{ "error": "Invalid id" }`
- `400` `{ "error": "Invalid body" }`
- `404` `{ "error": "Animal not found" }`
- `404` `{ "error": "Route not found" }`

Codes HTTP utilisés : `200`, `201`, `204`, `400`, `404`.

## Principes clean code appliqués

- Routes sans logique métier.
- Contrôleurs centrés sur la gestion requête/réponse.
- Service dédié aux règles métier.
- Store dédié à l'accès et la mutation des données mémoire.
- Validation isolée dans les validateurs et middlewares.
- Gestion centralisée des erreurs.
- Messages d'erreur centralisés dans `constants/errors.js`.
