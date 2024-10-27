// Some libs as ORM config.
import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import setupModels from '../db/models';

const USER: string = encodeURIComponent(config.dbUser!);
const PASSWORD: string = encodeURIComponent(config.dbPassword!);
const getURI = (dialect: string) => `${dialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const dialect = 'mysql';
const sequelize = new Sequelize(getURI(dialect), {
  dialect,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  },
  logging: false,
});

setupModels(sequelize);

export default sequelize;
