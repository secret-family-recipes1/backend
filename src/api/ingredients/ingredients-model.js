const db = require('../../db/db-config');

module.exports = {
  getIngredients,
};

function getIngredients(id) {
  return db('ingredients')
    .where('recipe_id', '=', id)
    .join(
      'recipe_ingredients',
      'ingredients.id',
      '=',
      'recipe_ingredients.ingredients_id'
    );
}
