exports.up = function (knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id');

    table.string('recipeName', 255).notNullable();
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipes');
};
