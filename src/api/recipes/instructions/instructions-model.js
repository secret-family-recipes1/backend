const db = require('../../../db/db-config');

module.exports = {
  findByRecipe,
  add,
  update,
};

function findByRecipe(id) {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id', 'instructions.instruction')
    .where('recipes.id', id)
    .orderBy('instructions.id');
}

function findById(id) {
  return db('instructions')
    .where('id', id)
    .select('id', 'instruction')
    .first();
}

function add(instruction) {
  return db('instructions')
    .insert(instruction, 'id')
    .then((id) => {
      return findById(id[0]);
    });
}

function update(id, changes) {
  return db('instructions')
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
