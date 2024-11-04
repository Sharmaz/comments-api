import express from 'express';
import cors from 'cors';

import routerApi from './routes/index';
import { logErrors } from './middlewares/error.handler';

const router = express.Router();

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  routerApi(app);

  app.use(logErrors)

  return app;
};

export default createApp;
