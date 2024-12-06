import { ApiError } from "./api.error";

export class DBConflictError extends ApiError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, 409, options);
  }
}

export class DBInternalServerError extends ApiError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, 500, options);
  }
}
