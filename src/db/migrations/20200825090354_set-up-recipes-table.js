exports.up = function (knex) {
  return knex.schema.createTable('recipes', (t) => {
    t.increments('id');

    t.string('name', 255).notNullable();
    t.string('category', 255).notNullable();
    t.string('source', 255).notNullable();
    t.string('imageURL', 255);
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('recipes');
};
