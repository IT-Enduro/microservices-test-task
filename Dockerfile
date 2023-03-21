FROM node:16-bullseye-slim

RUN mkdir -p /app
WORKDIR /app

COPY package* ./
RUN npm ci

COPY app.js ./

ENV GREETING_NAME=should_be_overriden
EXPOSE 8080

CMD ["node", "app.js"]

