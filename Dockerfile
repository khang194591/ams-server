FROM node:18-alpine as build

WORKDIR /usr/src/server

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000