
/*exports.up = function(knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
      table.integer("movie_id").unsigned().notNullable();
      table.integer("theater_id").unsigned().notNullable();
      table
          .foreign("movie_id")
          .references("movie_id")
          .inTable("movies");
      table
          .foreign("theater_id")
          .references("theater_id")
          .inTable("theaters");
      table.boolean("is_showing");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("movies_theaters");
  };*/

  exports.up = function(knex) {
    return knex.schema.hasTable('movies_theaters').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('movies_theaters', (table) => {
          table.integer('movie_id').notNullable();
          table.integer('theater_id').notNullable();
          table.boolean('is_showing');
        });
      }
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies_theaters');
  };
  