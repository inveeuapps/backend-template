### STAGE 1: Build node:12.7-alpine ###
FROM inveeuapps/node AS build

WORKDIR /usr/src/app

COPY . .

RUN apk update && \
    apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

RUN npm run build

### STAGE 2: Run ###
FROM inveeuapps/node10alpine

WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
### COPY .env /usr/src/app/dist/.env

COPY package.json package-lock.json ./
RUN npm install

CMD ["node", "dist/server.js"]
