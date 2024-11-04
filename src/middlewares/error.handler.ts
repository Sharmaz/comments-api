import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../config';

function logErrors(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  if (config.env === 'dev') {
    console.error(err);
  }
  next(err);
}

export { logErrors };
