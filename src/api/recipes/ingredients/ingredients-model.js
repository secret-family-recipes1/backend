const db = require('../../../db/db-config');

module.exports = {
  findByRecipe,
  add,
  update,
};

function findByRecipe(id) {
  return db('ingredients')
    .join('recipes', 'recipes.id', 'ingredients.recipe_id')
    .select('ingredients.id', 'ingredients.ingredient')
    .where('recipes.id', id)
    .orderBy('ingredients.id');
}

function findById(id) {
  return db('ingredients')
    .where('id', id)
    .select('id', 'ingredient')
    .first();
}

function add(ingredient) {
  return db('ingredients')
    .insert(ingredient, 'id')
    .then((id) => {
      return findById(id[0]);
    });
}

function update(id, changes) {
  return db('ingredients')
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
