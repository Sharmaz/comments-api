// Using env variables.
import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'dev';

interface Map {
  [key: string]: string | undefined
}

const envs: Map = {
  'dev': '.env',
  'e2e': '.env.e2e'
}

const options: Map = {};

if (envs[env]) {
  options.path = envs[env];
}

dotenv.config(options);

const config = {
  env,
  isProd: process.env.NODE_ENV === 'production',
  isEnd2End: process.env.NODE_ENV === 'e2e',
  isCi: process.env.NODE_ENV === 'ci',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT
};

export default config;

module.exports = config;
