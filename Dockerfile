# Étape 1 : utiliser une image Node.js officielle
FROM node:20

# Étape 2 : définir le dossier de travail
WORKDIR /app

# Étape 3 : copier les fichiers de dépendances
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste du projet
COPY . .

# Étape 6 : exposer le port utilisé par Next.js
EXPOSE 3000

# Étape 7 : lancer le serveur de développement
CMD ["npm", "run", "dev"]

