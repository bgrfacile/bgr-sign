# Utilise l'image officielle de Node.js comme base
FROM node:20-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code de l'application
COPY . .

# Expose le port sur lequel l'application sera accessible
EXPOSE 5174

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]