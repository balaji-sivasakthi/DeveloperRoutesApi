FROM node:17-alpine3.14

WORKDIR /app

COPY . /app

RUN npm i

EXPOSE 3000

CMD ["node","index.js"]