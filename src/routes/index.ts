import express from 'express';
import commentRouter from './comment.router';

function routerApi(app: any) { // eslint-disable-line
  const router = express.Router();

  app.use('/api', router);
  router.use('/comments', commentRouter);
}

export default routerApi;
