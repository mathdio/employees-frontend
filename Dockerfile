FROM node:16-alpine

WORKDIR /frontend

COPY ./package*.json .

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 5173

CMD [ "npx", "json-server", "db.json" ]
