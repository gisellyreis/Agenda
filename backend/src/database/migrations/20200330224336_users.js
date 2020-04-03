
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.string('id').primary();
    table.string('user_name').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('github_username');
    table.string('linkedin_username');
    table.string('avatar_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
