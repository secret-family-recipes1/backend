const server = require('./src/api/server');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.warn(`Server listening on http://localhost:${port}`);
});
