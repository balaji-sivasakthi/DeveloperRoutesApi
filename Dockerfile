FROM node:16.13.1-alpine3.13 

WORKDIR /app

COPY . /app

RUN npm i

EXPOSE 3000

CMD ["node","index.js"]