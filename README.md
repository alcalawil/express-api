# Express API

A simple express API using Chai as testing framework and a request-promise as client

## Usage

1. `git clone https://github.com/alcalawil/express-api.git`
2. `cd express-api/api`
3. `npm i`
4. `npm start`

## Run the client 

- Go to client folder `cd ./client`
- `npm i`
- `node client.js "some text"`

## Run tests

- From the api folder
- `npm test`

## Use with Docker

- From the api folder
- `docker build -t express-api:1.0 .`
- `docker run -p 5000:5000 express-api:1.0`

## TODO

- Use chai
