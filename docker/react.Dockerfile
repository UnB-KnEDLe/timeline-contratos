FROM node:14

WORKDIR /app

COPY ./frontend /app

RUN yarn install

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-p", "3000", "-s", "./build/"]