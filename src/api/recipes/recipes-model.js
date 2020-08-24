const db = require('../../db/db-config');

module.exports = {
  add,
  get,
  getAll,
  remove,
  getIngredients,
};

function add(recipe) {
  return db('recipes').insert(recipe);
}

function get(id) {
  return db('recipes').where({ id }).first();
}

function getAll(id) {
  return db('recipes').where('user_id', '=', id);
}

function remove(id) {
  return db('recipes').where({ id }).del();
}

function getIngredients(id) {
  return db('ingredients').join(
    'recipe_ingredients',
    'ingredients.id',
    '=',
    'recipe_ingredients.ingredients_id'
  );
}
