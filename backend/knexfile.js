
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'trending',
      user: 'admin',
      password: 'admin',
      host: 'localhost',
      port: 5432
    },
    migrations: {
      tableName: 'Knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
}
