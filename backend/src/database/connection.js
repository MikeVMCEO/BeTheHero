const knex = require('knex');
const configuration = require('../../knexfile');

// Or configuration.production 
const connection = knex(configuration.development);

module.exports = connection;