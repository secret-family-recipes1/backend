exports.up = function (knex) {
  return knex.schema.createTable('instructions', (t) => {
    t.increments('id');

    t.string('instruction', 255).notNullable();
    t.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('instructions');
};
