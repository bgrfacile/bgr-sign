# Étape 1 : Construire l'application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Définition des arguments et propagation en variables d'environnement
ARG VITE_APP_TITLE
ARG VITE_API_BASE_URL

ENV VITE_APP_TITLE=$VITE_APP_TITLE
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY . .

# Supprimer le dossier dist s'il existe avant de construire
RUN rm -rf dist

RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3001/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
