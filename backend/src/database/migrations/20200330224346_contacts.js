
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table) {
      table.increments();
      table.string('user_id').notNullable();
      table.string('name').notNullable();
      table.string('email');
      table.string('phone').notNullable();
      table.string('github_username');
      table.string('linkedin_username');
      table.string('avatar_url');

      table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contacts');
  };
  