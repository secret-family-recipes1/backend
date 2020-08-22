const db = require('../../db/db-config');

module.exports = {
  addUser,
};

function addUser(user) {
  return db('users').insert(user);
}
