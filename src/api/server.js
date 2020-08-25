const express = require('express');
const cors = require('cors');

const server = express();

const apiRouter = require('./api-router');

server.use(cors());
server.use(express.json());
server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.status(200).json({
    message:
      'api is up and running, please view docs on github for  avaliable enpoints',
  });
});

module.exports = server;
