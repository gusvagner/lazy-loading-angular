FROM node:lts-stretch-slim as node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN $(npm bin)/ng build --prod

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/lazy-loading-angular usr/share/nginx/html

EXPOSE 80
