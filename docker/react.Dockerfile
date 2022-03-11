FROM node:lts-alpine as build-deps
WORKDIR /app
COPY ./frontend /app
RUN apk update \
    && apk add --no-cache git \
    && yarn \
    && yarn build

FROM nginx
COPY --from=build-deps /app/build /var/www/timeline
COPY ./frontend/nginx.conf /etc/nginx/nginx.conf
