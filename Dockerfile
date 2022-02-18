FROM node:17-alpine3.14

WORKDIR /app

COPY . /app

RUN npm i

CMD ["node","index.js"]