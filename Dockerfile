FROM node:8.11.4-alpine
ARG NPM_TOKEN
RUN apk update && \
apk upgrade && \
apk add git yarn openssh

COPY package.json .
RUN yarn install

COPY . .
