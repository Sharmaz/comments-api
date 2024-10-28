require('ts-node/register');
const configs = require('../config/index.ts');

module.exports = {
  username: configs.dbUser,
  password: configs.dbPassword,
  database: configs.dbName,
  host: configs.dbHost,
  dialect: 'mysql',
  port: configs.dbPort,
}
