import {
  BadRequestError,
  BaseError,
  ExternalServerError,
  UnauthorizedError,
  logger,
} from '@shipengine/connect-runtime';
import { PsBadRequestError } from '../../client/error';
import { PsUnauthorizedError } from '../../client/error/ps-unauthorized.error';

export function handlerError(e: Error): void {
  logger.error(e);

  if (e instanceof BaseError) {
    throw e;
  }
  if (e instanceof PsBadRequestError) {
    throw new BadRequestError(e.message);
  }
  if (e instanceof PsUnauthorizedError) {
    throw new UnauthorizedError(e.message);
  }
  throw new ExternalServerError(e.message);
}
