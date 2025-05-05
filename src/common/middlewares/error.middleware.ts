import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { ValidateError } from 'tsoa';
import { AppError } from '../errors/baseError';

export const errorMiddleware = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'VALIDATION_FAILED',
      details: err?.fields,
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      code: err.code,
      statusCode: err.statusCode,
    });
  }

  logger.error(`Unexpected Error: ${err.message}`);

  if (err instanceof Error) {
    return res.status(500).json({
      message: 'INTERNAL_SERVER_ERROR',
    });
  }

  next();
};

