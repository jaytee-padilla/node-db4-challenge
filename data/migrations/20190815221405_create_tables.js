
exports.up = function(knex) {
	return knex.schema
		// 1 recipe has many ingredients
		.createTable('recipes', tbl => {
			tbl.increments();
			tbl.string('recipe_name', 128).notNullable().unique();
			tbl.text('recipe_instructions');
		})
		// 1 ingredient can be used in many recipes
		.createTable('ingredients', tbl => {
			tbl.increments();
			tbl.string('ingredient_name', 128).notNullable().unique();
		})
		// A recipe can have many ingredients and an ingredient can be used in many recipes
		.createTable('recipe_ingredients', tbl => {
			tbl.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients');
			tbl.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
			tbl.float('quantity')

			// the combination of the two keys above becomes our primary key
			// will enforce unique combination of ids
			tbl.primary(['ingredient_id', 'recipe_id']);
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropIfTableExists('recipe_ingredients')
		.dropIfTableExists('ingredients')
		.dropIfTableExists('recipes');
};
