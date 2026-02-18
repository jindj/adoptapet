Crée une API REST "animaux" avec Node.js + Express, en mettant la priorité absolue sur le clean code et la modularité.

Contrainte forte :

- API uniquement (pas de front, pas de HTML/CSS/JS client, pas de vues EJS).
- Type module uniquement.
- Données en mémoire uniquement (aucune base de données).

Objectifs qualité (obligatoires) :

- Séparation stricte des responsabilités (routes, contrôleurs, services/store, validation, middlewares, constantes).
- Un endpoint = un module de route via `const router = express.Router()`.
- Nommage explicite, fonctions courtes, pas de duplication.
- Gestion d’erreurs centralisée et format d’erreur uniforme.
- Code lisible, testable, extensible.

Stack et runtime :

- Port : `process.env.PORT || 3000`
- Préfixe API : `/api`
- Réponses API : JSON uniquement
- Format erreur : `{ "error": "MESSAGE" }`
- Codes HTTP : 200, 201, 204, 400, 404

Structure attendue :
.
├── server.js
├── package.json
├── nodemon.json
├── routes
│ └── api
│ └── animals
│ ├── index.js
│ └── actions
│ ├── getAnimals.js
│ ├── getAdoptedAnimals.js
│ ├── getAnimalById.js
│ ├── createAnimal.js
│ ├── updateAnimal.js
│ ├── adoptAnimal.js
│ └── deleteAnimal.js
├── controllers
│ └── animalsController.js
├── services
│ └── animalsService.js
├── store
│ └── animalsStore.js
├── validators
│ └── animalValidator.js
├── middlewares
│ ├── validateIdParam.js
│ ├── validateBody.js
│ ├── notFound.js
│ └── errorHandler.js
└── constants
└── errors.js

Règles de conception :

- Les routes ne contiennent pas de logique métier.
- Les contrôleurs orchestrent requête/réponse uniquement.
- Le service gère la logique métier.
- Le store encapsule les données en mémoire + CRUD bas niveau.
- Les validateurs contiennent uniquement la validation.
- Middleware pour :
  - validation id,
  - validation body,
  - 404 route inconnue,
  - gestion d’erreurs.
- Utiliser des constantes pour les messages d’erreurs.

Modèle Animal :
{
"id": number unique auto-incrémenté,
"name": string non vide,
"species": string non vide,
"age": number >= 0,
"adopted": boolean
}

Données initiales :

- 1 chat non adopté
- 1 chien adopté
- 1 lapin non adopté

Endpoints :

1. GET /api/animals
   - liste complète
   - filtre optionnel `?species=chien` (case-insensitive)
2. GET /api/animals/:id
3. POST /api/animals
   - body requis : name, species, age
   - adopted par défaut false
4. PUT /api/animals/:id
   - remplacement complet : name, species, age, adopted requis
5. PATCH /api/animals/:id/adopt
   - passe `adopted` à `true`
6. DELETE /api/animals/:id
   - 204 sans body
7. GET /api/animals/adopted
   - retourne uniquement les adoptés

Validation :

- id invalide => 400 `{ "error": "Invalid id" }`
- body invalide => 400 `{ "error": "Invalid body" }`
- non trouvé => 404 `{ "error": "Animal not found" }`

NPM :

- scripts :
  - `"start": "node server.js"`
  - `"dev": "nodemon server.js"`
- nodemon.json :
  {
  "watch": ["server.js", "routes", "controllers", "services", "store", "validators", "middlewares", "constants"],
  "ext": "js,json",
  "ignore": ["node_modules"]
  }

Sortie attendue :

- Fournis le contenu complet de chaque fichier.
- Respecte strictement l’architecture modulaire.
- Aucune partie front.
