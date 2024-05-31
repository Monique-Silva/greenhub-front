# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts-alpine as build

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
COPY --chown=silva:silva /src/assets/images/* /app/assets/images/


# build app for production with minification
RUN npm run build

# Expose the port Vite runs on
#EXPOSE 3000

# Start the Vite server
#CMD ["npm", "run", "dev"]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine

# Supprimer les fichiers par défaut de NGINX
RUN rm -rf /usr/share/nginx/html/

# Copier les fichiers de votre application Vue.js dans le répertoire NGINX
COPY --from=build /app/dist/ /usr/share/nginx/html

# Optionnel : copier la configuration personnalisée de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour accéder à l'application via HTTP
EXPOSE 80

# Commande par défaut pour démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]