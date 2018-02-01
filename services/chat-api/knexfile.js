module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'postgresql',
        connection: {

            host: '192.168.33.10',

            user: 'chatty',
            password: 'password',

            database: 'chatty',
            charset: 'utf8',

        }

    }

};
