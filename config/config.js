const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': 'dpg-chu3iundvk4oliv7s2o0-a.oregon-postgres.render.com',
    'port': 5432,
    'database': 'delivery_db_vj90',
    'user': 'arazoft',
    'password': 'bpJtLlpAElj5XZm7PJ5VS5mVgE9TGSdE',
    'ssl': {rejectUnauthorized: false}
};

const db = pgp(databaseConfig);

module.exports = db;