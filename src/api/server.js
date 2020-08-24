const express = require('express');
const cors = require('cors');

const server = express();

const apiRouter = require('./api-router');

server.use(express.json());
server.use('/api', cors(), apiRouter);
server.use(cors());
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

server.get('/', (req, res) => {
  res.status(200).json({
    message:
      'api is up and running, please view docs on github for  avaliable enpoints',
  });
});

module.exports = server;
