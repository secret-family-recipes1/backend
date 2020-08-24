exports.up = function (knex) {
  return knex.schema.createTable('recipe_ingredients', (t) => {
    t.increments('id');

    t.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    t.integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
