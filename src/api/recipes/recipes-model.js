const db = require('../../db/db-config');

module.exports = {
  add,
  get,
  getAll,
  remove,
  update,
};

function add(recipe) {
  return db('recipes')
    .insert(recipe)
    .returning('id')
    .then(([id]) => get(id));
}

function get(id) {
  return db('recipes').where({ id }).first();
}

function getAll(id) {
  return db('recipes').where('user_id', '=', id);
}

function update(id, changes) {
  return db('recipes').where({ id }).update(changes, id);
}

function remove(id) {
  return db('recipes').where({ id }).del();
}
