const express = require('express');
const cors = require('cors');

const server = express();

const apiRouter = require('./api-router');

server.use(express.json());
server.use('/api', cors(), apiRouter);
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({
    message:
      'api is up and running, please view docs on github for  avaliable enpoints',
  });
});

module.exports = server;
