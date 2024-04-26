#Cette ligne indique que l'image de base pour cette étape de construction est node:14. node:14 est une image Docker officielle contenant Node.js version 14. AS build nomme cette étape de construction build, ce qui permet de la référencer dans des étapes ultérieures.
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19
COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
