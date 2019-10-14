const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';

// console.log({ environment }); // environment is development

module.exports = knex(config[environment]);
