FROM node:8

WORKDIR /app

ENV PORT=5000

COPY package*.json ./

RUN npm install --production

COPY . .

CMD [ "npm", "start" ]