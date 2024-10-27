// Some libs as ORM config.
// const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize-typescript';
// const config = require('../config');
import config from '../config';
// const setupModels = require('../db/models');
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

// module.exports = sequelize;
export default sequelize;
