// For migrations, models and seeders. Also db connection.
// const config = require('../config');
import config from '../config';

const USER: string = encodeURIComponent(config.dbUser!);
const PASSWORD: string = encodeURIComponent(config.dbPassword!);
const getURI = (dialect: string) => `${dialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
  url: getURI('mysql'),
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
};
