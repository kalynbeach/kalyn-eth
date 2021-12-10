# syntax=docker/dockerfile:1

#
# Stage 1: Build static assets
#

FROM node:17 AS build

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY . /app

ENV CI=true
ENV PORT=3000

# TODO: Run tests

RUN npm run build


#
# Stage 2: Serve static assets
#

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Bring in static assets from build state
COPY --from=build /app/public .

# Run nginx with global directives and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


