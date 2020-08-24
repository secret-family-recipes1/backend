const db = require('../../db/db-config');

module.exports = {
  addUser,
  findBy,
};

function addUser(user) {
  return db('users').insert(user);
}

function findBy(filter) {
  return db('users').where(filter).orderBy('id');
}
