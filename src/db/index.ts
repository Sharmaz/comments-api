// For migrations, models and seeders. Also db connection.
import config from '../config';

const USER: string = encodeURIComponent(config.dbUser!);
const PASSWORD: string = encodeURIComponent(config.dbPassword!);
const getURI = (dialect: string) => `${dialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const dbConfig = {
  url: getURI('mysql'),
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
};

export default dbConfig;
module.exports = dbConfig;
