exports.up = function (knex) {
  return knex.schema.createTable('ingredients', (t) => {
    t.increments('id');

    t.string('ingredient', 255).notNullable();
    t.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
