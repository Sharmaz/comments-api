import express from 'express';
import cors from 'cors';

import routerApi from './routes/index';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello World!');
});

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  routerApi(app);

  return app;
};

export default createApp;
