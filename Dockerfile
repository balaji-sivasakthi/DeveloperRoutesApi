FROM node:16.13.1-alpine3.13 

WORKDIR /app

COPY . /app

RUN npm install -g npm@8.5.1

RUN npm i

EXPOSE 3000

CMD ["node","index.js"]