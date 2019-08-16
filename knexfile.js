// Update with your config settings.

module.exports = {

  development: {
		client: 'sqlite3',
		useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/recipes.db3'
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		// sqlite will not enforce Foreign Keys by default
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done); // this turn on the Foreign Key enforcement
			}
		}
  }
};
